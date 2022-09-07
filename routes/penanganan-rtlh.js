const express = require("express");

const router = express.Router();
const modelPngnRtlh = require("../models/penanganan-rtlh");

// CREATE
router.post("/", async (req, res) => {
  const postPngnRtlh = new modelPngnRtlh({
    tahun: req.body.tahun,
    kode_kelurahan: req.body.kode_kelurahan,
    kode_tahun_kelurahan: `${req.body.tahun}${req.body.kode_kelurahan}`,
    sumber_dana: req.body.sumber_dana,
    keterangan: req.body.keterangan,
  });

  try {
    const pngnRtlh = await postPngnRtlh.save();
    res.json({ message: pngnRtlh });
  } catch (err) {
    res.json({ message: err });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const pngnRtlh = await modelPngnRtlh.find();
    res.json(pngnRtlh);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE
router.put("/:pngnRtlhId", async (req, res) => {
  try {
    const pngnRtlh = await modelPngnRtlh.updateOne(
      {
        _id: req.params.pngnRtlhId,
      },
      {
        tahun: req.body.tahun,
        kode_kelurahan: req.body.kode_kelurahan,
        kode_tahun_kelurahan: `${req.body.tahun}${req.body.kode_kelurahan}`,
        sumber_dana: req.body.sumber_dana,
        keterangan: req.body.keterangan,
      }
    );
    res.json(pngnRtlh);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE
router.delete("/:pngnRtlhId", async (req, res) => {
  try {
    const pngnRtlh = await modelPngnRtlh.deleteOne({
      _id: req.params.pngnRtlhId,
    });
    res.json(pngnRtlh);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
