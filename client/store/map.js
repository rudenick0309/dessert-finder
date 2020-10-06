import {observable, action} from "mobx";
import axios from 'axios'

const map = observable({    // C R U D
  cultureName:null,
  cultureNameU: action((data) => {
    map.cultureName = data
    map.dataC(data)
  }),

  data:null,
  dataTwo:null,
  dataC: action(async (data) => {
    console.log('f mobx, map dataC, data');
    const result = await axios.get(`http://localhost:4000/search/blog.json?data=${data}`)
    map.data=result.data.items

    const resultTwo = await axios.get(`http://localhost:4000/search/image?data=${data}`)
    map.dataTwo=resultTwo.data.items
  }),
})

export {map}
