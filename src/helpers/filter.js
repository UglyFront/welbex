export function filter(state) {
    const out = []

                if (state.filter == "name") {
                    state.allData.forEach(el => {
                        if (el.name.includes(state.value)) {
                            out.push(el)
                        }
                    })
                }
                else if (state.filter == "amount" && +state.value) {
                    switch (state.type) {
                        case "larger": {
                            state.allData.forEach(el => {
                                if (el.amount > +state.value) {
                                    out.push(el)
                                }
                            })
                            break;
                        }
                        case "less": {
                            state.allData.forEach(el => {
                                if (el.amount < +state.value) {
                                    out.push(el)
                                }
                            })
                            
                            break;
                        }
                        case "equal": {
                            state.allData.forEach(el => {
                                if (el.amount === +state.value) {
                                    out.push(el)
                                }
                            })
                            
                            break;
                        }
                    }
                }
                else if (state.filter == "distance"  && +state.value) {
                    switch (state.type) {
                        case "larger": {
                            state.allData.forEach(el => {
                                if (el.distance > +state.value) {
                                    out.push(el)
                                }
                            })
                            break;
                        }
                        case "less": {
                            state.allData.forEach(el => {
                                if (el.distance < +state.value) {
                                    out.push(el)
                                }
                            })
                            
                            break;
                        }
                        case "equal": {
                            state.allData.forEach(el => {
                                if (el.distance === +state.value) {
                                    out.push(el)
                                }
                            })
                            
                            break;
                        }
                    }
                }
                else {
                    alert('Что-то пошло не так')
                }

                state.pages  = Math.ceil(out.length / state.limit)
                state.outData = out.slice(state.activePage * state.limit, state.activePage * state.limit + state.limit)
}