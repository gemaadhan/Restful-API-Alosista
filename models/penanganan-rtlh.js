const mongoose = require("mongoose");
const penangananRtlh = mongoose.model("penangananRtlh", {
  tahun: {
    type: Number,
    required: true,
  },
  kode_kelurahan: {
    type: Number,
    required: true,
  },
  kode_tahun_kelurahan: {
    type: Number,
    required: true,
  },
  sumber_dana: {
    apbn_bsps: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
    apbn_dak: {
      rencana: {
        pb: {
          unit: Number,
          anggaran: Number,
          anggaran_sharing: Number,
        },
      },
      realisasi: {
        pb: {
          unit: Number,
          anggaran: Number,
          anggaran_sharing: Number,
        },
      },
    },
    apbn_provinsi: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
    apbn_kab_kota: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
    dana_desa: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
    csr: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
    baznas_slash_upz: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
    dana_lainnya: {
      rencana: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
      realisasi: {
        pk: {
          unit: Number,
          anggaran: Number,
        },
      },
    },
  },
  keterangan: String,
});

module.exports = penangananRtlh;
