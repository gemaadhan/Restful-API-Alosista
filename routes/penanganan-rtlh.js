const express = require("express");

const router = express.Router();
const modelPngnRtlh = require("../models/penanganan-rtlh");

// CREATE
router.post("/", async (req, res) => {
  const postPngnRtlh = new modelPngnRtlh({
    tahun: req.body.tahun,
    kode_kelurahan: req.body.kode_kelurahan,
    kode_tahun_kelurahan: `${req.body.tahun}${req.body.kode_kelurahan}`,
    apbn_bsps: req.body.apbn_bsps,
    apbn_dak: req.body.apbn_dak,
    apbd_provinsi: req.body.apbd_provinsi,
    apbd_kab_kota: req.body.apbd_kab_kota,
    dana_desa: req.body.dana_desa,
    csr: req.body.csr,
    csr: req.body.csr,
    baznas_slash_upz: req.body.baznas_slash_upz,
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
        apbn_bsps: req.body.apbn_bsps,
        apbn_dak: req.body.apbn_dak,
        apbd_provinsi: req.body.apbd_provinsi,
        apbd_kab_kota: req.body.apbd_kab_kota,
        dana_desa: req.body.dana_desa,
        csr: req.body.csr,
        csr: req.body.csr,
        baznas_slash_upz: req.body.baznas_slash_upz,
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
