<template>
  <section>
    <div>
      <div class="l-container">
        <scroll-group v-slot="slotProps" :max="4" :delay="100">
          <ul class="bottom">
            <li :class="{ isActive: slotProps.count >= 1 }">
              <img
                class="cover"
                src="~assets/images/img01.jpg"
                srcset="
                  ~assets/images/img01.jpg    1x,
                  ~assets/images/img01@2x.jpg 2x
                "
                alt=""
              />
            </li>
            <li :class="{ isActive: slotProps.count >= 2 }">
              <img
                class="cover"
                src="~assets/images/img02.jpg"
                srcset="
                  ~assets/images/img02.jpg    1x,
                  ~assets/images/img02@2x.jpg 2x
                "
                alt=""
              />
            </li>
            <li :class="{ isActive: slotProps.count >= 3 }">
              <img
                class="cover"
                src="~assets/images/img03.jpg"
                srcset="
                  ~assets/images/img03.jpg    1x,
                  ~assets/images/img03@2x.jpg 2x
                "
                alt=""
              />
            </li>
            <li :class="{ isActive: slotProps.count >= 4 }">
              <img
                class="cover"
                src="~assets/images/img04.jpg"
                srcset="
                  ~assets/images/img04.jpg    1x,
                  ~assets/images/img04@2x.jpg 2x
                "
                alt=""
              />
            </li>
          </ul>
        </scroll-group>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  props: {},
  computed: {},
  methods: {},
})
</script>

<style scoped></style>
