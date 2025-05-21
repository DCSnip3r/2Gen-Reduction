<template>
    <main>
        <h1>EOCP (CPEOLL)</h1>
        <section>
            <h2>EOCP Cases</h2>
            <table class="eocp-table">
                <thead>
                    <tr>
                        <th>Edge/Corner</th>
                        <th v-for="corner in cornerCases" :key="corner.key">{{ corner.label }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="eo in eoCases" :key="eo.key">
                        <th>{{ eo.label }}</th>
                        <td v-for="corner in cornerCases" :key="corner.key">
                            <div v-for="(alg, i) in getAlgsByEoAndCorner(eo.key, corner.key)" :key="i" class="alg-cell">
                                <VisualCube :pllType="corner.key" :case="alg.moves" :size="120"
                                    :faceletConfig="'cpeoll'" style="margin-bottom: 0.5rem;" />
                                <div><code>{{ alg.moves }}</code></div>
                                <div v-if="alg.name" style="font-size: 0.9em; color: #888;">{{ alg.name }}</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
            <h2>Recognition</h2>
            <ul>
                <li>Rotationless Recognition: The EOCP cases can be recognized by looking at a single corner of the
                    cube, without looking around the cube. </li>
                <li>First, identify the edge flip case. It is either no-flipped edges, two adjacent edges, two
                    opposite edges, or all 4 edges.</li>
                <li>Then, treat the UFR corner as correctly permuted. </li>
                <li>Without rotating the cube, identify the corner cycle. Look at the UFL and UBR corners and identify
                    where each should go relative to the UFR piece. This is a little tricky because you can only see two
                    stickers.</li>
                <ul>
                    <li>For UF,UR edge cases (adjacent flipped edges), treat the corner between the edges as "correctly
                        permuted."
                        It is
                        common to
                        AUF here to normalize recognition (though it is possible to recognize the cycle from any angle)
                    </li>
                    <li>For opposite edges,
                        inspect the corner to the right of one of the flipped edges.</li>
                    <li>For 4-edge cases, inspect whichever corner is in UR.</li>
                </ul>
                <li>Practice identifying the cycle of corners and edges from these reference points.</li>
            </ul>
            <div style="display: flex; align-items: flex-start; gap: 3rem; margin: 1.5rem 0;">
                <div
                    style="display: flex; flex-direction: column; align-items: center; flex: 1; border-right: 1px solid #bbb; padding-right: 2rem;">
                    <div style="display: flex; gap: 2rem;">
                        <div style="text-align: center;">
                            <VisualCube :pllType="'Ca'" :case="'U U\''" :size="150" :faceletConfig="'cpeoll'" />
                            <div style="font-size: 0.95em; margin-top: 0.3em;">Corner cycle: <b>Ca</b></div>
                        </div>
                        <div style="text-align: center;">
                            <VisualCube :pllType="'R'" :case="'U U\''" :size="150" :faceletConfig="'cpeoll'" />
                            <div style="font-size: 0.95em; margin-top: 0.3em;">Corner cycle: <b>R</b></div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; padding-left: 2rem;">
                    <div style="display: flex; gap: 2rem;">
                        <div style="text-align: center;">
                            <VisualCube :pllType="'Cb'" :case="'U U\''" :size="150" :faceletConfig="'cpeoll'" />
                            <div style="font-size: 0.95em; margin-top: 0.3em;">Corner cycle: <b>Cc</b></div>
                        </div>
                        <div style="text-align: center;">
                            <VisualCube :pllType="'F'" :case="'U U\''" :size="150" :faceletConfig="'cpeoll'" />
                            <div style="font-size: 0.95em; margin-top: 0.3em;">Corner cycle: <b>F</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <em>
                    The <b>R</b> swap is a clockwise corner cycle, and the <b>F</b> swap is a counter-clockwise corner
                    cycle. We identify
                    the 3-cycle in order to preserve the convention of treating UFR as solved, then convert it to a
                    2-corner-swap for algorithm lookup.
                    This is easy to remember: the piece that traverses diagonally is the one that swaps with the
                    permuted (solved)
                    corner.
                </em>
            </div>
        </section>
        <section>
            <h2>Practice Tips</h2>
            <ul>
                <li>Many EOCP algorithms are short and use familiar triggers. Try to group and learn them by pattern
                    (e.g., adjacent vs. opposite flips).</li>
                <li>Since most are mirrors/inverses, focus on learning one and then derive the others.</li>
                <li>Use fat sune or similar triggers to influence or solve corner orientation when possible.</li>
                <li>Try to recognize and execute EOCP without cube rotations for speed and efficiency.</li>
                <li>This step can be expanded into full COLL or CLLEF for advanced solvers.</li>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
import VisualCube from '../components/VisualCube.vue'
import { eocpAlgs } from '../content/eocpAlgs'

const eoCases = [
    { key: 'Solved', label: 'No Flips' },
    { key: 'UF, UR', label: 'UF/UR Flip' },
    { key: 'UF, UB', label: 'UF/UB Flip' },
    { key: 'UF, UR, UB, UL', label: 'All Flips' },
]
const cornerCases = [
    { key: 'C', label: 'C (Solved)' },
    { key: 'L', label: 'L' },
    { key: 'B', label: 'B' },
    { key: 'F', label: 'F' },
    { key: 'R', label: 'R' },
    { key: 'D', label: 'D' },
]

function getAlgsByEoAndCorner(eo_case: string, caseId: string) {
    // Robust matching: trim whitespace from both keys and data
    const eoKey = eo_case.trim();
    const caseKey = caseId.trim();
    return eocpAlgs
        .filter(a => (a.eo_case?.trim() === eoKey) && (a.caseId?.trim() === caseKey))
        .flatMap(a => a.algs || []);
}
</script>

<style scoped>
.eocp-table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1.5rem;
}

.eocp-table th,
.eocp-table td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
    vertical-align: top;
    background: transparent;
    font-weight: bold;
}

.eocp-table th {
    background: transparent;
    font-weight: bold;
    vertical-align: middle;
}

.eocp-table td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
    background: transparent;
    font-weight: normal;
    /* Remove vertical-align for td */
}

.alg-cell {
    margin-bottom: 0.5rem;
}
</style>
