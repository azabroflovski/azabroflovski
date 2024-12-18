import {
    defineConfig,
    presetTypography,
    presetUno
} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(), // required
        presetTypography(),
    ],
})