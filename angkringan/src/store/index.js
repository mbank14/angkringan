import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        makanan: [
          {
            id: 122,
            item: "Mie Ayam",
            harga: 10000,
            deskripsi: "mie ayam dengan resep turnun temurun"
          },
          {
            id: 123,
            item: "Nasi Kucing Pedesan",
            harga: 2500,
            deskripsi: "nasi dengan lauk ikan tongkol peda"
          },
          {
            id: 125,
            item: "Nasi Kucing Ayam Suirrr",
            harga: 2700,
            deskripsi: "nasi dengan lauk ayam suir"
          },
          {
            id: 126,
            item: "Magelangan",
            harga: 12500,
            deskripsi: "Magelangan"
          },
          {
            id: 120,
            item: "Nasi Sarden",
            harga: 8500,
            deskripsi: "nasi dengan lauk ikan tongkol peda"
          },
          {
            id: 150,
            item: "Sate Puyuh",
            harga: 1500,
            deskripsi: "sate telor burung puyuh"
          },
          {
            id: 151,
            item: "Sate Usus",
            harga: 1500,
            deskripsi: "sate usus ayam"
          },
          {
            id: 152,
            item: "Sate Ati Ampela",
            harga: 3500,
            deskripsi: "sate ati ampela"
          },
          {
            id: 153,
            item: "Mendoan",
            harga: 8500,
            deskripsi: "Mendoan 8 buah dengan sambal kecap"
          },
          {
            id: 154,
            item: "Nugget",
            harga: 10500,
            deskripsi: "Nugget 8 buah dengan saos"
          },
          {
            id: 156,
            item: "Krupuk Mlarat",
            harga: 3500,
            deskripsi: "Kerupuk mlarat dan sambal"
          },
          {
            id: 157,
            item: "Nasi Kucing Pedesan",
            harga: 7500,
            deskripsi: "pisang goreng 7X"
          }
        ]
      },
      {
        minuman: [
          {
            id: 310,
            item: "Bad Day freeze",
            harga: 3000,
            deskripsi: "guday sasetan"
          },
          {
            id: 311,
            item: "Nutrisari jeruk",
            harga: 3000,
            deskripsi: "Nutrisari Jeruk"
          },
          {
            id: 312,
            item: "Tea Jus",
            harga: 5000,
            deskripsi: "tea jus"
          },
          {
            id: 313,
            item: "kapal Api",
            harga: 3500,
            deskripsi: "kapal api sasetan"
          },
          {
            id: 314,
            item: "Lemur White Coffe",
            harga: 3000,
            deskripsi: "luwak white coffe sasetan"
          },
          {
            id: 321,
            item: "Americano",
            harga: 15000,
            deskripsi: "kopi americano"
          },
          {
            id: 322,
            item: "V60",
            harga: 17000,
            deskripsi: "V60"
          },
          {
            id: 323,
            item: "Long Black",
            harga: 18000,
            deskripsi: "Long black"
          },
          {
            id: 325,
            item: "Espresssssooooooo JS",
            harga: 13000,
            deskripsi: "espresso"
          },
          {
            id: 326,
            item: "Caramel Macchiato",
            harga: 27000,
            deskripsi: "Machiatio dengan caramel"
          },
          {
            id: 327,
            item: "Cappuccino Scuro",
            harga: 26000,
            deskripsi: "Machiatio dengan caramel"
          },
          {
            id: 328,
            item: "Cappuccino",
            harga: 21000,
            deskripsi: "Machiatio dengan caramel"
          },
          {
            id: 329,
            item: "Short Black",
            harga: 20000,
            deskripsi: "Machiatio dengan caramel"
          },
          {
            id: 330,
            item: "Latte Macchiato",
            harga: 29000,
            deskripsi: "Machiatio dengan caramel"
          },
          {
            id: 340,
            item: "Jus Alpukat",
            harga: 11000,
            deskripsi: "jus alpukat"
          },
          {
            id: 341,
            item: "jus tomat",
            harga: 5000,
            deskripsi: "jus tomat"
          },
          {
            id: 342,
            item: "Jus Wortel + Telur naga",
            harga: 19000,
            deskripsi: "sesuai nama item"
          },
          {
            id: 343,
            item: "Jus Jambu Muda",
            harga: 9000,
            deskripsi: "Jus jambu"
          },
          {
            id: 344,
            item: "Jus Pisang Raja",
            harga: 9000,
            deskripsi: "jus pisang raja wakanda"
          }
        ]
      }
    ]
  },

  getters: {
    getData: state => {
      return state.products[0];
    },
    getDataM: state => {
      return state.products[1];
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
