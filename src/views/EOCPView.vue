<template>
    <main>
        <h1>EOCP (CPEOLL)</h1>
        <section>
            <h2>What is EOCP?</h2>
            <p>
                EOCP (Edge Orientation; Corner Permutation) is the first step of the 2Gen-Reduction method. The goal is
                to orient all last layer edges and permute the corners, reducing the cube to a state solvable with only
                R and U moves. Many EOCP cases are familiar from OLL, and most algorithms are short, ergonomic, and easy
                to learn.
            </p>
            <ul>
                <li>14 algorithms are needed for full EOCP coverage, but many are mirrors or inverses of each other.
                </li>
                <li>Most are combinations of familiar triggers, and you likely already know several from OLL.</li>
                <li>Average move count is low (around 8.3 STM for adjacent, 8.7 STM for opposite, 10.7 STM for four-edge
                    cases).</li>
                <li>For correctly oriented edges, a single CP algorithm can be used, or you can upgrade to full COLL for
                    more efficiency.</li>
            </ul>
        </section>
        <section v-for="caseData in eocpAlgs" :key="caseData.id" style="margin-bottom:2rem;">
            <h2>{{ caseData.label }}</h2>
            <p v-if="caseData.state"><strong>State:</strong> {{ caseData.state }}</p>
            <AlgorithmList
                :algorithms="caseData.algs.map((alg, i) => ({ id: caseData.id + '-' + i, name: alg.name || 'Alg', moves: alg.moves }))" />
        </section>
        <section>
            <h2>Recognition</h2>
            <ul>
                <li>Rotationless Recognition: Most EOCP cases can be recognized from a single corner of the cube,
                    without rotating. For adjacent edges, inspect the corner between the edges; for opposite edges,
                    inspect the corner to the right of one of the flipped edges.</li>
                <li>For 4-edge cases, inspect whichever corner is in UR.</li>
                <li>Practice identifying the cycle of corners and edges from these reference points.</li>
            </ul>
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
import AlgorithmList from '../components/AlgorithmList.vue'
import { eocpAlgs } from '../content/eocpAlgs'
</script>
