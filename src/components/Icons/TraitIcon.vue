<template>
  <PhSoundcloudLogo
    v-if="traitSymbol === WaypointTraitSymbol.UNCHARTED"
    weight="duotone"
    size="1.5rem"
  />
  <PhShoppingCart
    v-if="traitSymbol === WaypointTraitSymbol.MARKETPLACE"
    weight="duotone"
    size="1.5rem"
  />
  <PhRocket v-if="traitSymbol === WaypointTraitSymbol.SHIPYARD" weight="duotone" size="1.5rem" />
  <PhLighthouse v-if="traitSymbol === WaypointTraitSymbol.OUTPOST" weight="duotone" size="1.5rem" />
  <PhCirclesFour
    v-if="traitSymbol === WaypointTraitSymbol.SCATTERED_SETTLEMENTS"
    weight="duotone"
    size="1.5rem"
  />
  <PhGitBranch
    v-if="traitSymbol === WaypointTraitSymbol.SPRAWLING_CITIES"
    weight="duotone"
    size="1.5rem"
  />
  <PhBuildings
    v-if="traitSymbol === WaypointTraitSymbol.MEGA_STRUCTURES"
    weight="duotone"
    size="1.5rem"
  />
  <PhUsersThree
    v-if="traitSymbol === WaypointTraitSymbol.OVERCROWDED"
    weight="duotone"
    size="1.5rem"
  />
  <PhCircuitry
    v-if="traitSymbol === WaypointTraitSymbol.HIGH_TECH"
    weight="duotone"
    size="1.5rem"
  />
  <PhSmileyAngry
    v-if="traitSymbol === WaypointTraitSymbol.CORRUPT"
    weight="duotone"
    size="1.5rem"
  />
  <PhBriefcase
    v-if="traitSymbol === WaypointTraitSymbol.BUREAUCRATIC"
    weight="duotone"
    size="1.5rem"
  />
  <PhChartLine
    v-if="traitSymbol === WaypointTraitSymbol.TRADING_HUB"
    weight="duotone"
    size="1.5rem"
  />
  <PhFactory v-if="traitSymbol === WaypointTraitSymbol.INDUSTRIAL" weight="duotone" size="1.5rem" />
  <PhDetective
    v-if="traitSymbol === WaypointTraitSymbol.BLACK_MARKET"
    weight="duotone"
    size="1.5rem"
  />
  <PhAtom
    v-if="traitSymbol === WaypointTraitSymbol.RESEARCH_FACILITY"
    weight="duotone"
    size="1.5rem"
  />
  <PhSword
    v-if="traitSymbol === WaypointTraitSymbol.MILITARY_BASE"
    weight="duotone"
    size="1.5rem"
  />
  <PhBinoculars
    v-if="traitSymbol === WaypointTraitSymbol.SURVEILLANCE_OUTPOST"
    weight="duotone"
    size="1.5rem"
  />
  <PhMapTrifold
    v-if="traitSymbol === WaypointTraitSymbol.EXPLORATION_OUTPOST"
    weight="duotone"
    size="1.5rem"
  />
  <PhDiamondsFour
    v-if="traitSymbol === WaypointTraitSymbol.MINERAL_DEPOSITS"
    weight="duotone"
    size="1.5rem"
    class="text-white"
  />
  <PhDiamondsFour
    v-if="traitSymbol === WaypointTraitSymbol.COMMON_METAL_DEPOSITS"
    weight="duotone"
    size="1.5rem"
    class="text-green-500"
  />
  <PhDiamondsFour
    v-if="traitSymbol === WaypointTraitSymbol.PRECIOUS_METAL_DEPOSITS"
    weight="duotone"
    size="1.5rem"
    class="text-purple-500"
  />
  <PhDiamondsFour
    v-if="traitSymbol === WaypointTraitSymbol.RARE_METAL_DEPOSITS"
    weight="duotone"
    size="1.5rem"
    class="text-amber-500"
  />
  <PhDropHalfBottom
    v-if="traitSymbol === WaypointTraitSymbol.METHANE_POOLS"
    weight="duotone"
    size="1.5rem"
    class="text-purple-500"
  />
  <PhCurrencyEth
    v-if="traitSymbol === WaypointTraitSymbol.ICE_CRYSTALS"
    weight="duotone"
    size="1.5rem"
  />
  <PhFire
    v-if="traitSymbol === WaypointTraitSymbol.EXPLOSIVE_GASES"
    weight="duotone"
    size="1.5rem"
  />
  <PhMagnet
    v-if="traitSymbol === WaypointTraitSymbol.STRONG_MAGNETOSPHERE"
    weight="duotone"
    size="1.5rem"
  />
  <PhWaveform
    v-if="traitSymbol === WaypointTraitSymbol.VIBRANT_AURORAS"
    weight="duotone"
    size="1.5rem"
  />
  <PhDotsNine
    v-if="traitSymbol === WaypointTraitSymbol.SALT_FLATS"
    weight="duotone"
    size="1.5rem"
  />
  <PhMountains v-if="traitSymbol === WaypointTraitSymbol.CANYONS" weight="duotone" size="1.5rem" />
  <PhSun
    v-if="traitSymbol === WaypointTraitSymbol.PERPETUAL_DAYLIGHT"
    weight="duotone"
    size="1.5rem"
  />
  <PhCloudFog
    v-if="traitSymbol === WaypointTraitSymbol.PERPETUAL_OVERCAST"
    weight="duotone"
    size="1.5rem"
  />
  <PhDropHalfBottom
    v-if="traitSymbol === WaypointTraitSymbol.DRY_SEABEDS"
    weight="duotone"
    size="1.5rem"
  />
  <PhWaves
    v-if="traitSymbol === WaypointTraitSymbol.MAGMA_SEAS"
    weight="duotone"
    size="1.5rem"
    class="text-amber-500"
  />
  <PhMountains
    v-if="traitSymbol === WaypointTraitSymbol.SUPERVOLCANOES"
    weight="duotone"
    size="1.5rem"
    class="text-amber-500"
  />
  <PhCastleTurret
    v-if="traitSymbol === WaypointTraitSymbol.VAST_RUINS"
    weight="duotone"
    size="1.5rem"
  />
  <PhFlowerLotus
    v-if="traitSymbol === WaypointTraitSymbol.MUTATED_FLORA"
    weight="duotone"
    size="1.5rem"
  />
  <PhTree v-if="traitSymbol === WaypointTraitSymbol.TERRAFORMED" weight="duotone" size="1.5rem" />
  <PhThermometerHot
    v-if="traitSymbol === WaypointTraitSymbol.EXTREME_TEMPERATURES"
    weight="duotone"
    size="1.5rem"
  />
  <PhGauge
    v-if="traitSymbol === WaypointTraitSymbol.EXTREME_PRESSURE"
    weight="duotone"
    size="1.5rem"
  />
  <PhButterfly
    v-if="traitSymbol === WaypointTraitSymbol.DIVERSE_LIFE"
    weight="duotone"
    size="1.5rem"
  />
  <PhPawPrint
    v-if="traitSymbol === WaypointTraitSymbol.SCARCE_LIFE"
    weight="duotone"
    size="1.5rem"
  />
  <PhBone v-if="traitSymbol === WaypointTraitSymbol.FOSSILS" weight="duotone" size="1.5rem" />
  <PhFeather
    v-if="traitSymbol === WaypointTraitSymbol.WEAK_GRAVITY"
    weight="duotone"
    size="1.5rem"
  />
  <PhBarbell
    v-if="traitSymbol === WaypointTraitSymbol.STRONG_GRAVITY"
    weight="duotone"
    size="1.5rem"
  />
  <PhBarbell
    v-if="traitSymbol === WaypointTraitSymbol.CRUSHING_GRAVITY"
    weight="duotone"
    size="1.5rem"
    class="text-red-500"
  />
  <PhFaceMask
    v-if="traitSymbol === WaypointTraitSymbol.TOXIC_ATMOSPHERE"
    weight="duotone"
    size="1.5rem"
  />
  <PhFlask
    v-if="traitSymbol === WaypointTraitSymbol.CORROSIVE_ATMOSPHERE"
    weight="duotone"
    size="1.5rem"
  />
  <PhWind
    v-if="traitSymbol === WaypointTraitSymbol.BREATHABLE_ATMOSPHERE"
    weight="duotone"
    size="1.5rem"
  />
  <PhPlanet v-if="traitSymbol === WaypointTraitSymbol.JOVIAN" weight="duotone" size="1.5rem" />
  <PhDotsThreeOutline
    v-if="traitSymbol === WaypointTraitSymbol.ROCKY"
    weight="duotone"
    size="1.5rem"
  />
  <PhMountains
    v-if="traitSymbol === WaypointTraitSymbol.VOLCANIC"
    weight="duotone"
    size="1.5rem"
    class="text-amber-500"
  />
  <PhSnowflake v-if="traitSymbol === WaypointTraitSymbol.FROZEN" weight="duotone" size="1.5rem" />
  <PhCloudRain v-if="traitSymbol === WaypointTraitSymbol.SWAMP" weight="duotone" size="1.5rem" />
  <PhSkull v-if="traitSymbol === WaypointTraitSymbol.BARREN" weight="duotone" size="1.5rem" />
  <PhFlowerTulip
    v-if="traitSymbol === WaypointTraitSymbol.TEMPERATE"
    weight="duotone"
    size="1.5rem"
  />
  <PhTreePalm v-if="traitSymbol === WaypointTraitSymbol.JUNGLE" weight="duotone" size="1.5rem" />
  <PhShrimp v-if="traitSymbol === WaypointTraitSymbol.OCEAN" weight="duotone" size="1.5rem" />
  <PhSpiral v-if="traitSymbol === WaypointTraitSymbol.STRIPPED" weight="duotone" size="1.5rem" />
</template>

<script setup lang="ts">
import { WaypointTraitSymbol } from '@/models/enums/waypointTraitSymbol.enum'
// @ts-ignore
import {
  PhSoundcloudLogo,
  PhShoppingCart,
  PhRocket,
  PhLighthouse,
  PhCirclesFour,
  PhGitBranch,
  PhBuildings,
  PhUsersThree,
  PhCircuitry,
  PhDetective,
  PhBriefcase,
  PhChartLine,
  PhFactory,
  PhSmileyAngry,
  PhAtom,
  PhSword,
  PhBinoculars,
  PhMapTrifold,
  PhDiamondsFour,
  PhDropHalfBottom,
  PhCurrencyEth,
  PhMagnet,
  PhFire,
  PhWaveform,
  PhDotsNine,
  PhMountains,
  PhSun,
  PhCloudFog,
  PhWaves,
  PhCastleTurret,
  PhFlowerLotus,
  PhTree,
  PhThermometerHot,
  PhGauge,
  PhPawPrint,
  PhButterfly,
  PhBone,
  PhFeather,
  PhBarbell,
  PhFlask,
  PhWind,
  PhFaceMask,
  PhPlanet,
  PhDotsThreeOutline,
  PhSnowflake,
  PhCloudRain,
  PhSkull,
  PhFlowerTulip,
  PhTreePalm,
  PhShrimp,
  PhSpiral
  // @ts-ignore
} from '@phosphor-icons/vue'

const props = defineProps<{
  traitSymbol: WaypointTraitSymbol
}>()
</script>
