const express = require("express");
const { authenticate } = require("../middleware/auth");
const {
  showVouchers,
  getVoucher,
  claimVoucher,
  addVoucher,
  deleteVoucher,
  updateVoucher,
} = require("../controllers/voucher");

const router = express.Router();

router.get("/showVouchers", authenticate, showVouchers);

router.post("/getVoucher", authenticate, getVoucher);

router.post("/claimVoucher", authenticate, claimVoucher);

router.post("/addVoucher", authenticate, addVoucher);

router.post("/deleteVoucher", authenticate, deleteVoucher);

router.post("/updateVoucher", authenticate, updateVoucher);

module.exports = router;
