<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
const dialog = ref(false)
const btnHandle = (state) => {
  console.log(dialog.value);
  dialog.value = state
}

const items = ref([{ title: '產品訊息' }, { title: '新聞公告' }])

const firstname = ref()

const nameRules = [
  value => {
    if (value) return true

    return 'Name is requred.'
  },
  value => {
    if (value?.length <= 10) return true

    return 'Name must be less than 10 characters.'
  },
]
const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
]

const tab = ref(null)
</script>

<template>
  <div class="container">
    <mark>頁籤</mark>
    <v-card>
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <v-tab value="one">vuetifyjs</v-tab>
        <v-tab value="two">Item Two</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <div>
              <mark>按鈕</mark>
              <v-btn>
                Button
              </v-btn>
            </div>

            <mark>卡片</mark>
            <v-card
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
              variant="tonal"
            ></v-card>

            <mark>彈窗</mark>
            <v-dialog
              v-model="dialog"
              width="auto"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                  @click="btnHandle(true)"
                >
                  Open Dialog
                </v-btn>
              </template>

              <v-card>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    block
                    @click="btnHandle(false)"
                  >Close Dialog</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <mark>菜單</mark>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                >
                  Activator slot
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <mark>表單</mark>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="10"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>


                </v-row>
              </v-container>
            </v-form>

            <mark>選擇器</mark>
            <v-select
              label="Select"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              variant="outlined"
            ></v-select>

            <mark>表格</mark>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Calories
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </v-table>

            <mark>輪播</mark>
            <v-carousel show-arrows="hover">
              <template v-slot:prev="{ props }">
                <v-btn
                  variant="elevated"
                  color="success"
                  @click="props.onClick"
                >
                  <Icon icon="mdi:chevron-left" />
                </v-btn>
              </template>
              <template v-slot:next="{ props }">
                <v-btn
                  variant="elevated"
                  color="info"
                  @click="props.onClick"
                >
                  <Icon icon="mdi:chevron-right" />
                </v-btn>
              </template>
              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
              ></v-carousel-item>
            </v-carousel>

          </v-window-item>

          <v-window-item value="two">
            <h1 className="bg-orange-400 text-3xl font-bold underline">
              Hello world!
            </h1>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>
<style>
.container {
  padding: 10px 80px;
}

mark {
  display: block;
  padding: 2px 10px;
  margin-bottom: 10px;
  margin-top: 40px;
}

.v-btn__content svg {
  font-size: 30px;
}
</style>
