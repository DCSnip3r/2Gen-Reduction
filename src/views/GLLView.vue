<template>
    <main>
        <h1>2GLL</h1>
        <section>
            <h2>What is 2GLL?</h2>
            <p>
                2GLL (2-Gen ZBLL) is the second step of the 2Gen-Reduction method. After EOCP, the cube is in a 2-Gen
                state (solvable with only R and U moves). 2GLL solves the remaining last layer by permuting the edges
                and orienting the corners using only R and U turns.
            </p>
            <ul>
                <li>There are 85 2GLL cases, but many are mirrors, inverses, or variants of each other.</li>
                <li>Many cases are sunes, sune variants, or combinations of familiar algorithms.</li>
                <li>Algorithms are ergonomic, require no regrip, and are suitable for one-handed solving.</li>
                <li>Learning a memory system can help you memorize the set efficiently.</li>
            </ul>
        </section>
        <section>
            <h2>Algorithm List</h2>
            <AlgorithmList :algorithms="algorithms" />
        </section>
        <section>
            <h2>Recognition</h2>
            <ul>
                <li>Use rotationless recognition: Corner orientation is easily recognized, and edge permutation can be
                    practiced by inspecting specific edges for each case.</li>
                <li>For sune cases, identify the edges adjacent to the oriented corner as C A O X (correct, adjacent,
                    opposite, swap).</li>
                <li>L, T, U, H, and Pi cases can be recognized by AUFing the corners to solved and locating the
                    solved/opposite edge.</li>
                <li>With practice, 2GLL recognition can be faster than PLL recognition.</li>
            </ul>
        </section>
        <section>
            <h2>Practice Tips</h2>
            <ul>
                <li>2GLL algorithms use only R and U turns, making them ergonomic and suitable for one-handed solving.
                </li>
                <li>Many cases are mirrors, inverses, or variants of each other—group and learn them by pattern.</li>
                <li>Use a memory system to help memorize the 2GLL algorithms.</li>
                <li>Focus on learning the most common or ergonomic cases first, then expand to the rest.</li>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
import AlgorithmList from '../components/AlgorithmList.vue'
const algorithms = [
    { id: '1', name: '2GLL Example', moves: "R U2 R' U' R U' R'" },
    { id: '2', name: '2GLL Example 2', moves: "R2 U R2 U2 R2 U R2" },
]
</script>
