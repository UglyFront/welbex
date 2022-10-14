import { filter } from "@/helpers/filter";
import { createStore } from "vuex";

const dataArray =[
    {
        id: 1,
        date: "21.09.22",
        name: "aaa",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 2,
        date: "21.09.22",
        name: "bfbsd",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 3,
        date: "21.09.22",
        name: "jhfhjfhj",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 4,
        date: "21.09.22",
        name: "kfhjfhy",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 5,
        date: "21.09.22",
        name: "hfgghfhgtyu",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 6,
        date: "21.09.22",
        name: "nxcvbg",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {   
        id: 7,
        date: "21.09.22",
        name: "jdgjdttyue",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        date: "21.09.22",
        name: "hsfgsrth",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 8,
        date: "21.09.22",
        name: "trrt",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 9,
        date: "21.09.22",
        name: "bbb",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 10,
        date: "21.09.22",
        name: "trwywrtwrtw",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 11,
        date: "21.09.22",
        name: "twrtwrt",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 12,
        date: "21.09.22",
        name: "ouioukh",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 13,
        date: "21.09.22",
        name: "yetyeyeg",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 14,
        date: "21.09.22",
        name: "yetegeg",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 15,
        date: "21.09.22",
        name: "yetgetge",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 16,
        date: "21.09.22",
        name: "yet21getge",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 17,
        date: "21.09.22",
        name: "yet21get77ge",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 18,
        date: "21.09.22",
        name: "yetgevv",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 19,
        date: "21.09.22",
        name: "tuetygggg",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 20,
        date: "21.09.22",
        name: "uyutitu",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 22,
        date: "21.09.22",
        name: "rywrtrwvvv",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 23,
        date: "21.09.22",
        name: "dgjhdgzz",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 24,
        date: "21.09.22",
        name: "zzvfgwry",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 25,
        date: "21.09.22",
        name: "xvnxghn",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 26,
        date: "21.09.22",
        name: "qeerqew",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 27,
        date: "21.09.22",
        name: "qwer3trwy",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 28,
        date: "21.09.22",
        name: "52462fgdht",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 29,
        date: "21.09.22",
        name: "624524t",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 30,
        date: "21.09.22",
        name: "twrtg4467",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 31,
        date: "21.09.22",
        name: "7456340",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
    {
        id: 32,
        date: "21.09.22",
        name: "524rsgr",
        amount: Math.floor(Math.random() * 2000),
        distance: Math.floor(Math.random() * 2000)
    },
]



export const store = createStore({
    state() {
        return {
            limit: 10,
            filter: "name",
            type: "include",
            value: "",
            allData: dataArray,
            outData: [],
            pages: 0,
            activePage: 0,
            optionsFilter: [
                {
                    name: "Имя",
                    filter: "name"
                },
                {
                    name: "Количество",
                    filter: "amount"
                },
                {
                    name: "Расстояние",
                    filter: "distance"
                }
            ],
            optionsType: [
                {
                    name: "Содержит",
                    filter: "include"
                }
            ],
        }
    },

    mutations: {
        setLimit(state, num) {
            state.limit = num
            state.activePage = 0
            this.commit('getAllPage')
        },

        getAllPage(state) {
            state.pages  = Math.ceil(state.allData.length / state.limit)
            this.commit('setOut')
        },

        setActivePage(state, page) {
            state.activePage = page - 1
        },

        setOut(state) {
            if (state.value.length === 0) {
                state.outData = state.allData.slice(state.activePage * state.limit, state.activePage * state.limit + state.limit)
                state.pages  = Math.ceil(state.allData.length / state.limit)
            } else {
                filter(this.state)
            }
        },

        setFilter(state, filter) {
            state.filter = filter

            if (state.filter == "name") {
                state.optionsType =  [
                    {
                        name: "Содержит",
                        filter: "include"
                    }
                ],
                state.type = "include"
            } else {
                state.value = ""
                state.type = "equal"
                state.optionsType = [
                    {
                        name: "Больше",
                        filter: "larger"
                    },
                    {
                        name: "Меньше",
                        filter: "less"
                    },
                    {
                        name: "Равно",
                        filter: "equal"
                    }
                ]
            }
            state.activePage = 0
        },

        setType(state, type) {
            state.type = type
            state.activePage = 0
            this.commit('setOut')
        },

        setValue(state, value) {
            state.activePage = 0
            state.value = value
        }
    }
})