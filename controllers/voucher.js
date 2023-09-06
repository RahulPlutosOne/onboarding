const XLSX = require("xlsx");
const workbook = XLSX.readFile("./test.xlsx");

const vouchers = (voucher_id) => {
  let data = [];

  const sheets = workbook.SheetNames;

  for (let i = 0; i < sheets.length; i++) {
    const temp = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[i]]
    );
    temp.forEach((res) => {
      console.log(res);
      data.push(res);
    });
  }

  if (voucher_id !== undefined) {
    return data;
  }

  const new_data = data.map((voucher) => {
    return {
      voucher_id: voucher.voucher_id,
      voucher_desc: voucher.voucher_desc,
    };
  });
  return new_data;
};

const voucherFilter = (voucher_id) => {
  const data = vouchers(voucher_id);

  const voucher = data.filter((voucher) => voucher.voucher_id === voucher_id);

  return voucher;
};

exports.showVouchers = async (req, res) => {
  try {
    const data = vouchers();
    res.send(data);
  } catch (err) {
    res.send("please send a proper request");
  }
};

exports.getVoucher = async (req, res) => {
  try {
    const { voucher_id } = req.body;

    const data = vouchers();

    const voucher = data.filter((voucher) => voucher.voucher_id === voucher_id);

    res.send(voucher);
  } catch (err) {
    res.send("please send a proper request");
  }
};

exports.claimVoucher = async (req, res) => {
  try {
    const { voucher_id } = req.body;
    const voucher_data = voucherFilter(voucher_id);

    const sheets = workbook.SheetNames;

    const worksheet = workbook.Sheets[sheets];

    let data = XLSX.utils.sheet_to_json(worksheet);

    data = data.filter((item) => item.voucher_id !== voucher_id);

    const newWorksheet = XLSX.utils.json_to_sheet(data);

    workbook.Sheets[sheets] = newWorksheet;

    XLSX.writeFile(workbook, "./test.xlsx");

    res.send({ voucher_data, msg: "voucher claimed successfully" });
  } catch (err) {
    res.send("please send a proper request");
  }
};

exports.addVoucher = async (req, res) => {
  try {
    if (req.user.isAdmin === true) {
      const { voucher_id, voucher_code, voucher_desc } = req.body;

      const voucher_data = [
        {
          voucher_id: voucher_id,
          voucher_code: voucher_code,
          voucher_desc: voucher_desc,
        },
      ];

      const sheets = workbook.SheetNames;

      const worksheet = workbook.Sheets[sheets];

      XLSX.utils.sheet_add_json(worksheet, voucher_data, {
        skipHeader: true,
        origin: -1,
      });
      XLSX.writeFile(workbook, "./test.xlsx");

      console.log(vouchers());

      res.send("voucher created successfully");
    } else {
      res.send("you are not allowed to create a voucher");
    }
  } catch (err) {
    res.send("please send a proper request");
  }
};

exports.deleteVoucher = async (req, res) => {
  try {
    if (req.user.isAdmin === true) {
      const { voucher_id } = req.body;
      const sheets = workbook.SheetNames;

      const worksheet = workbook.Sheets[sheets];

      let data = XLSX.utils.sheet_to_json(worksheet);

      data = data.filter((item) => item.voucher_id !== voucher_id);

      const newWorksheet = XLSX.utils.json_to_sheet(data);

      workbook.Sheets[sheets] = newWorksheet;

      XLSX.writeFile(workbook, "./test.xlsx");

      console.log(vouchers());

      res.send("voucher deleted successfully");
    } else {
      res.send("You are not allowed to delete the voucher");
    }
  } catch (err) {
    res.send("please send a proper request");
  }
};

exports.updateVoucher = async (req, res) => {
  try {
    if (req.user.isAdmin === true) {
      const { voucher_id, voucher_code, voucher_desc } = req.body;

      const sheets = workbook.SheetNames;

      const worksheet = workbook.Sheets[sheets];

      let data = XLSX.utils.sheet_to_json(worksheet);

      let voucher = data.find((item) => item.voucher_id === voucher_id);

      voucher.voucher_code = voucher_code;
      voucher.voucher_desc = voucher_desc;

      const newWorksheet = XLSX.utils.json_to_sheet(data);

      workbook.Sheets[sheets] = newWorksheet;

      XLSX.writeFile(workbook, "./test.xlsx");

      console.log(vouchers());

      res.send("voucher updated successfully");
    } else {
      res.send("You are not allowed to update the voucher");
    }
  } catch (err) {
    res.send("please send a proper request");
  }
};

try {
} catch (err) {
  res.send("please send a proper request");
}
