<template>
<div id="vue">
  <div class="input-select">
    <select class="form-control" v-model="selected">
      <option v-for="country in countries" v-bind:key="country">
        {{ country }}
      </option>
      <option v-for="region in regions" v-bind:key="region">
        {{ region }}
      </option>
    </select>
  </div>
</div>
</template>
 
<script> 
export default{  
  props: ['number'],  
  watch: {
    selected: function(){
      if (this.number === 1) {
        this.$store.commit('changeFirstCountryName', this.selectedName.name)
      } else {
        this.$store.commit('changeSecondCountryName',  this.selectedName.name)
      }
      this.$emit('search', this.number,  this.selectedName.isRegion)
    }
  },
  data(){
    return {
    selected: '',
    countries: ["","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad Tobago","Tunisia","Turkey","Turkmenistan","Turks Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],
    regions: ["European Union", "European Free Trade Association", "Caribbean Community", "Pacific Alliance", "African Union", "Union of South American Nations", "Eurasian Economic Union", "Arab League", "Association of Southeast Asian Nations", "Central American Integration System", "Central European Free Trade Agreement", "North American Free Trade Agreement", "South Asian Association for Regional Cooperation"]
  }
  },

  computed: {
    selectedName() {
    let selectedCountry = this.selected
    let region = new Set(this.regions).has(selectedCountry) 
    var result = {
      name: selectedCountry,
      isRegion: region
    }
      return result;
    }
  }
}
</script> 
<style scoped>
#vue {
  font-family: "Helvetica", Arial, sans-serif;
  margin: 1em auto;
  max-width: 500px;
}
  h2 {
    font-weight: normal;
  }
  
  .input-select {
    position: relative;
    display: inline-block;
    width: 100%;
  }
    label {
      display: inline-block;
      width: 100%;
      font-size: .75em;
    }

    select {
      border-radius: 5px;
      appearance: none;
      position: relative;
      background-color: #fff;
      font-size: 110%;
      border: .5px solid #d2d2d2;
      width: 100%;    
    }
  
  select:focus {
      outline-color: rgb(143, 169, 255);
    }
  span {
    padding-top: 1em;
  }

</style>