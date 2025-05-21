<template>
    <div>
        <img :src="visualCubeUrl" :width="size" :height="size" alt="VisualCube" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Facelet color configurations
const faceletConfigs = {
    cpeoll: 'yyyyyyyyyrdrrrrrrrbdbbbbbbbwwwwwwwwwodooooooogdggggggg',
    default: 'yyyyyyyyyrrrrrrrrrbbbbbbbbbwwwwwwwwwoooooooooggggggggg',
    // Add more configs here as needed
}

const props = defineProps({
    case: {
        type: String,
        required: true
    },
    arw: {
        type: String,
        default: ''
    },
    pllType: { // New prop for preset arrows
        type: String,
        default: ''
    },
    stageMask: {
        type: String,
        default: ''
    },
    size: {
        type: Number,
        default: 200
    },
    faceletConfig: {
        type: String,
        required: true,
    },
})

// Helper: Arrow for edge swap or cycle
function edgeSwapArrows(edges: string[], direction = 'cw') {
    // edges: array of digits as strings, e.g. ['1','5','7']
    // direction: 'cw' (clockwise) or 'ccw' (counterclockwise)
    if (!Array.isArray(edges) || edges.length < 2) return ''
    if (edges.length === 2) {
        // simple swap
        return `${'U' + edges[0]}${'U' + edges[1]},${'U' + edges[1]}${'U' + edges[0]}`
    }
    // 3-cycle
    if (direction === 'cw') {
        // e.g. 1->5, 5->7, 7->1
        return `${'U' + edges[0]}${'U' + edges[1]},${'U' + edges[1]}${'U' + edges[2]},${'U' + edges[2]}${'U' + edges[0]}`
    } else {
        // ccw: 1->7, 7->5, 5->1
        return `${'U' + edges[0]}${'U' + edges[2]},${'U' + edges[2]}${'U' + edges[1]},${'U' + edges[1]}${'U' + edges[0]}`
    }
}

// Helper: Arrow for corner swap (e.g. U3 <-> U7)
function cornerSwapArrows(pos1: string, pos2: string) {
    return `${pos1}${pos2},${pos2}${pos1}`
}

// Helper: Multiple arrows for common PLL cases
function pllArrows(type: string) {
    switch (type) {
        case 'Ua':
            // 3-cycle: U1->U5->U7->U1 (cw)
            return edgeSwapArrows(['1', '5', '7'], 'cw')
        case 'Ub':
            // 3-cycle: U1->U7->U5->U1 (ccw)
            return edgeSwapArrows(['1', '5', '7'], 'ccw')
        case 'Z':
            // swap: U1<->U3, U5<->U7
            return edgeSwapArrows(['1', '3']) + ',' + edgeSwapArrows(['5', '7'])
        // 3-cycle edge presets
        case 'Fa': // F stays, R->B, B->L, L->R (clockwise)
            return edgeSwapArrows(['1', '5', '3'], 'cw')
        case 'Fb': // F stays, R->L, L->B, B->R (counterclockwise)
            return edgeSwapArrows(['1', '5', '3'], 'ccw')
        case 'Ra': // R stays, F->B, B->L, L->F (clockwise)
            return edgeSwapArrows(['1', '7', '3'], 'cw')
        case 'Rb': // R stays, F->L, L->B, B->F (counterclockwise)
            return edgeSwapArrows(['1', '7', '3'], 'ccw')
        case 'Ba': // B stays, R->F, F->L, L->R (clockwise)
            return edgeSwapArrows(['3', '5', '7'], 'cw')
        case 'Bb': // B stays, R->L, L->F, F->R (counterclockwise)
            return edgeSwapArrows(['3', '5', '7'], 'ccw')
        case 'La': // L stays, F->R, R->B, B->F (clockwise)
            return edgeSwapArrows(['1', '5', '7'], 'cw')
        case 'Lb': // L stays, F->B, B->R, R->F (counterclockwise)
            return edgeSwapArrows(['1', '5', '7'], 'ccw')
        case 'Za':
            return edgeSwapArrows(['1', '3']) + ',' + edgeSwapArrows(['5', '7'])
        case 'Zb':
            return edgeSwapArrows(['1', '5']) + ',' + edgeSwapArrows(['3', '7'])
        case 'H':
            return edgeSwapArrows(['1', '7']) + ',' + edgeSwapArrows(['5', '3'])
        // 3-cycle corner presets
        case 'B':
            return cornerSwapArrows('U0', 'U2')
        case 'L':
            return cornerSwapArrows('U0', 'U6')
        case 'F':
            return cornerSwapArrows('U6', 'U8')
        // 3-cycle corner presets
        case 'R':
            return cornerSwapArrows('U2', 'U8')
        case 'D':
            return cornerSwapArrows('U6', 'U2')
        case "Ca":
            return 'U0U2,U2U6,U6U0'
        case "Cb":
            return 'U0U6,U6U2,U2U0'
        default:
            return ''
    }
}

function cornerArrows(type: string) {
    switch (type) {
        case 'B':
            return cornerSwapArrows('U0', 'U3')
        case 'L':
            return cornerSwapArrows('U0', 'U6')
        case 'F':
            return cornerSwapArrows('U6', 'U8')
        // 3-cycle corner presets
        case 'R':
            return cornerSwapArrows('U2', 'U8')
        case 'D':
            return cornerSwapArrows('U0', 'U8')
        default:
            return ''
    }
}

// Compute which arrows to use: arw prop takes precedence, then pllType
const computedArw = computed(() => {
    if (props.arw) return props.arw
    if (props.pllType) return pllArrows(props.pllType)
    return ''
})

const visualCubeUrl = computed(() => {
    const base = 'https://cube.rider.biz/visualcube.php?fmt=svg'
    const params = [
        `size=${props.size}`,
        'view=plan',
        `case=${encodeURIComponent(props.case)}`,
        computedArw.value ? `arw=${encodeURIComponent(computedArw.value)}` : '',
        props.stageMask ? `stage=${encodeURIComponent(props.stageMask)}` : '',
        'bg=181818',
        `fc=${faceletConfigs[props.faceletConfig as keyof typeof faceletConfigs]}`,
    ].filter(Boolean).join('&')
    return `${base}&${params}`
})

</script>
