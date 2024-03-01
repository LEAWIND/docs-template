<script setup>


import { useData } from 'vitepress';
globalThis.useData = useData;

import AutoLang from './scripts/AutoLang.mts';
import './scripts/AutoSearch.mts';

if (globalThis.window) {
	AutoLang();
}

</script>

<template></template>
