<template>
  <div
    class="bg-cover h-screen bg-bottom transition p-10 grid place-items-center"
  >
    <form
      id="form"
      @submit.prevent="getWeather"
      class="flex gap-2"
      v-show="showForm"
    >
      <input
        type="text"
        name="city"
        v-model="city"
        class="rounded-md p-1 capitalize outline-none ring-1 focus:ring-4"
        placeholder="type your city"
      />
      <button class="font-bold px-1 rounded-full border bg-white">Go</button>
    </form>
    {{ weather }}
    <div class="flex flex-col">
      <h2 class="capitalize text-2xl font-semibold">{{ weather.message }}</h2>
    </div>
    <div
      class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-transparent flex flex-col items-center justify-center gap-4"
      v-if="typeof weather.main != 'undefined'"
    >
      <div>
        <h1>{{ weather.name }}, {{ weather.sys.country }}</h1>
        <div class="date">{{ todaysDate() }}</div>
      </div>
      <div class="icon">
        <img :src="`${weather_icon}${weather.weather[0].icon}${'@2x.png'}`" />
      </div>
      <div>
        <p>{{ Math.round(weather.main.temp) }}°C</p>
        <h2>{{ weather.weather[0].main }}</h2>
        <h2 class="capitalize">{{ weather.weather[0].description }}</h2>
      </div>

      <button
        v-show="showclear"
        @click="clearData"
        class="font-bold px-4 rounded-full ring-1"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_key: "6937aedad6fa7ff1ca3024465d2a8d41",
      url_base: "https://api.openweathermap.org/data/2.5/",
      weather_icon: "http://openweathermap.org/img/wn/",
      city: "",
      weather: {},
      showclear: false,
      showForm: true,
      showBack: false,
    };
  },
  methods: {
    async getWeather() {
      await fetch(
        `${this.url_base}weather?q=${this.city}&units=metric&appid=${this.api_key}`
      )
        .then((res) => res.json())
        .then((json) => (this.weather = json));

      this.city = "";
      this.showclear = true;
      this.showForm = false;
    },
    clearData() {
      this.weather = "";
      this.showForm = true;
      this.showclear = false;
    },
    todaysDate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let d = new Date();
      let month = months[d.getMonth()];
      let day = days[d.getDay()];
      let date = d.getDate();
      let year = d.getFullYear();
      return `${month} , ${date} ${day} ${year}`;
    },
  },
};
</script>
