<template>
  <div class="skills">
    <VueWriter
      :array="['Skills']"
      :iterations="1"
      :typeSpeed="150"
      class="Header"
    />
    <div>
      <table class="skillTable"></table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import skills from "../assets/skills.json";

export default defineComponent({
  name: "SkillsView",
  mounted: function () {
    let table = document.querySelector(".skillTable") as HTMLElement;
    for (let i = 0; i < skills["skills"].length; i++) {
      let row = document.createElement("tr");
      let name = document.createElement("td");
      let rating = document.createElement("td");
      name.innerText = skills["skills"][i][0].toString();
      rating.innerText = skills["skills"][i][1].toString();
      row.appendChild(name);
      row.appendChild(rating);
      table.appendChild(row);
    }
    this.sort();
    this.insertTableHeaders();
    this.replaceNumberWithSquares();
  },
  methods: {
    sort() {
      //sort the table by the 2nd index
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.querySelector(".skillTable") as HTMLTableElement;
      if (!table) return;
      switching = true;
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("td")[1];
          y = rows[i + 1].getElementsByTagName("td")[1];
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          let parentNode = rows[i].parentNode;
          if (!parentNode) return;
          parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    },
    insertTableHeaders() {
      let table = document.querySelector(".skillTable") as HTMLTableElement;
      let row = document.createElement("tr");
      let name = document.createElement("td");
      let rating = document.createElement("td");
      name.innerText = "Skill";
      rating.innerText = "Personal Rating";
      row.appendChild(name);
      row.appendChild(rating);
      table.insertBefore(row, table.firstChild);
    },
    replaceNumberWithSquares() {
      let table = document.querySelector(".skillTable") as HTMLTableElement;
      let rows = table.rows;
      for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rating = row.getElementsByTagName("td")[1];
        let ratingValue = parseInt(rating.innerHTML);
        let ratingSquares = "";
        for (let j = 0; j < ratingValue; j++) {
          ratingSquares +=
            "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' class='skillBox'><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z'/></svg>";
        }
        rating.innerHTML = ratingSquares;
      }
    },
  },
});
</script>

<style>
.Header {
  margin-top: 1em;
}

.skillTable {
  display: table;
  margin: auto;
  border-collapse: collapse;
  margin-top: 1em;
  margin-bottom: 1em;
}

.skillTable > tr {
  display: table-row;
}

.skillTable > tr > td {
  display: table-cell;
  color: var(--primary);
  font-size: 1.2em;
  padding: 5px;
}

.skillBox {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
