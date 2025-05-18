Reddit Post

I've seen a a lot of posts asking how to learn ZBLL. The best place to start learning this alg set is with the 2gen cases (corners permuted cases all solvable with R and U moves).

However, you need a LL method that increases your exposure to these cases so you can practice them. OLL will skip all 2gen ZBLLs except U-perms.

Instead, use 2-gen-reduction (2GR) for your LL method. It has essentially the same avg move count, and consists of 2 steps:

    EO ; CP (Edge orientation, corner permutation) algs

    2gen ZBLL (Edge permutation, Corner Orientation) algs

Easy to learn:

    You probably already know all the EO;CPs. Some are common OLLs.

    The 2gen cases are largely inverses and mirrors of each other, which means instead of learning 12 algs per CO case, you're often only learning 6-8.

    Many, like 1/3 of cases are solvable with Sunes.

    This may be unique to me, because 2GLL are all R and U moves, I shorthand notation by encoding their turns as 0, 1, or 2 (counterclockwise, clockwise, 2 turns) and assume the first move is always R move. I find this helps make algs look more concise and memorable.

        E.g. here is my sune alg: 1101 120.

Efficiency:

One nice feature of this method is that both steps of LL recognition can be completely rotationless. It's possible to recognize any case from looking at one corner of the cube. In practice, during each step you can AUF based on the EO and CO respectively, and immedietely recognize the case.

I suspect this method is often much more move-efficient than OLLPLL. For example OLL does not inherently check for corner permutation, so you it's likely you'll destroy CP with OLL, and end up with a longer PLL. In addition, the PLLs often are composed of 2x of the EO;CPs, which makes PLL look like a 2-step solution

On to ZBLL:

Once you know 2GLL and want practice on the rest of ZBLL, you should start forcing EO skips during F2L, which will land you in a ZBLL.

I haven't made it this far, and I actually am skeptical on the cost/benefit of learning this move set. If you tread ahead, I would love to know what you learn about the following caveats.

    It's hard very hard to recognize edge and corner permutation at the same time while corners aren't oriented. Being able to recognize 2GLL will be a helpful prerequisite skill.

    2GLL will help build your sense of the ZBLL algs by providing foundations to map more complex cases on top of.

    EO skips means extra moves. So why not just use EO;CP? It's a hyper fast alg set, typically 8 moves.

    I suspect that a bunch of ZBLLs are actually just 2GRs.

TL;DR

2GR is a very cool and totally viable LL method, which I strongly favor over OLL PLL and I hope you will too.

Speedsolving post:
I've been investigating and using an alternative last-layer method to OLL PLL, which I call 2-Gen Reduction (2GRLL or just 2GR).

2GR has an average move count of 21.52 STM, 25.10 QTM. For reference, OLL PLL has a move count of 21.5 HTM.

2GR consists of two steps:

    Edge Orientation; Corner Permutation (EO;CP) -- The step that reduces the cube to 2-Gen.
    Edge Permutation; Corner Orientation (EP;CO) -- Solve the cube using 2-Gen algorithms, a subset of ZBLL that consist of only R and U turns.

EO;CP algorithms can be found here or here.

EP;CO can be found on the Speedsolving Wiki under the ZZ algorithms where corners are correctly permuted. They are also documented and broken down on Lars Petrus' website. I also have compiled a list here.

Neither of these steps are novel, nor do I take credit for finding the algorithms. My intent here is to discuss their conjunctive use as a viable and advantageous LL method.

I haven't seen this method discussed in detail and it doesn't appear on the Speedsolving Wiki, so I thought I'd do it some service. I would enjoy seeing prior discussions of the method that go under alternative names.

Quick Aside:
Petrus comes close to this method, but edges are already oriented when the last layer is reached, so it cannot capitalize on EO;CP. I've never been a fan of the Petrus EO step anyway. Preserving EO makes the last two F2L slots harder than they need to be, and unless you know ZBLL, you still need a 2 look last layer. EO;CP is just as fast (maybe faster) than the EO step and leaves a 1 look last layer.

Background

I was raised on a 4 look method that: 1) Orients edges 2) Permutes Corners 3) Orients Corners 4) Permutes edges. Doesn't require many algs and is pretty fast.

My biggest issue was handling a diagonal corner swap in step 2, but I discovered I already knew two algorithms that preserved CP (Rw U R' U R U2 Rw') and diagonal swapped them (F R U R'U'F + inverse). All of the sudden I had a way to avoid diag swaps completely, provided there were edges to orient.

EO;CP - 2-Gen Reduction step

I figured there might be ways to solve all cases for EO and CP.
Turns out there are. CO and EP actually play together extremely well.

Algorithms:
14 algorithms are needed. The algs I picked have an average move count of [8.27 STM, 8.90 QTM]
They are not hard to learn, most are mirrors and inverses, and you might know some from OLL.

    There are 5 algorithms for orienting two adjacent edges [7.50 STM , 8.33 QTM]
    There are 4 algorithms for orienting two opposite edges [8.67 STM, 8.67QTM]
    There are 3 algorithms for orienting all four edges [10.67 STM, 12.17 QTM], but I haven't found optimals yet. Still scouring the CLLEFs and OLLCPs
    Basic CP algs can be used for correctly oriented edges. I use 1 algorithm for all cases (R U' L' U R' U' L) [7 STM, 7 QTM]. However, I would suggest upgrading to full COLL.

Ergonomics:

    The algorithms are short and mostly combinations of triggers.

Recognition:

    You can use Rotationless Recognition: meaning the case can be recognized from inspecting a single corner of the cube. Very advantageous, but has a learning curve.
    For adjacent edges, I consider the corner between the edges solved, and then recognize the cycle of the others.
    For opposite edges, I inspect the corner to the right of one of the flipped edges and then recognize the cycle.
    For 4 cases, I inspect whichever corner I have in UR.

Comments:

    While this step is usually known as EOCPLL, I call it the 2 Gen reduction step because it reduces the cube to 2 gen.
    In cases with no edges to orient, the reduction step would just be CP. Theoretically, this 2 gen reduction step can take place before the last layer is reached.
    This step suggests opportunities to expand into full COLL, CLLEF.
    If corners are already permuted, fat sune can sometimes be used to influence or even solve the orientation of the corners. Small benefit.

EP;CO or 2-Gen ZBLL
With the corners permuted and the edges oriented, the cube is in a 2-Gen state, meaning it can be solved using two layers (R and U).

Algorithms:
2GLL has 85 cases. This is seemingly daunting, but:

    Many algs are inverses of each other
    Many algs are sunes, sune variants, and combinations of other algorithms.
    They can be memorized using a memory system.

I'll go into point 3 in a different article, but it's a main reason I adopted this system.

Ergonomics:

    Since the algs only require R and U turns, the ergonomics are quite good.
    One hand solving becomes much, much easier.
    The algs I've learned so far do not require regripping.

Recognition:

    Once more, Rotationless Recognition can be used.
    Corner orientation is easily recognizable.
    Recognizing the edge permutation is the more difficult part, but it can be practiced and perfected. Theoretically recognition can (and should) be done by inspecting any corner and the adjacent 2 edges. In practice, I identify specific edges for each case.
        For sune cases, I identify the edges adjacent to the oriented corner as C A O X (correct, adjacent, opposite, swap). I organize the cases like this.
        L cases can be similarly recognized by the edges adjacent either of the oriented corners.
        T and U cases often can be recognized by the edge opposite the unoriented corners, and any solved edges.
        H and Pi corner cases often can be recognized by AUF the corners to solved, then locating finding the solved and opposite edge.

Comments:
The recognition has a learning curve, but with practice it can be faster than PLL recognition.
Many (but not all) algs are optimal ZBLLs. There are often shorter EP;CO algorithms that are not 2-Gen. However, for speedcubing I prefer the 2-Gen algorithms due to ergonomics and point 3.

OLL PLL DISCUSSION
While OLL PLL is consistent (HTM 21.5), I think it has some drawbacks:

    The PLLs are handy, but some are hard to to recognize/execute.
    The OLLs are numerous and make PLL difficult to predict.
    It feels like a brute force method. It doesn't always capitalizes on shortcuts-- namely corner permutation at the beginning of LL.
    OLL will miss cases where CP is solved at the beginning of LL unless additional inspection is used and more algorithms are known.

Granted, 2GR is not always the fastest LL method for all LL cases.
However, it can always substitute OLL PLL (except in OLL skips), and the initial CP check more readily suggests opportunities to adapt to a better LL method.

Recap of 2GR Benefits

    2GR is 2LLL method with a similar move count to OLL PLL.
    Accommodates possibility of corner permutation from the outset.
    Rotationless Recognition can be used for both steps.
    Great ergonomics in both the EOCP and COEP
        EO;CP is mostly triggers.
        CO;EP uses 2 layers and usually doesn't require regripping.
        CO;EP is excellent for 1 handed solving.
    Memory system can be used to learn & remember 2-Gen ZBLL algorithms.
    Easy to learn EO;CP step. Can get to 3LLL more quickly than learning all the PLLs.
    Fat sune can sometimes be used to influence/predict CO in first step.
    Small number of EO;CPs allow easier prediction second step.
    Can expand EO;CPs into full COLL, CLLEF.
    The approach suggests opportunities to adapt to a faster LL method.
    Start to learn the ZBLLs.

Disadvantages

    Does not know how to handle PLLs (But granted, OLL PLL does not handle or recognize 2-Gen cases)
    May not be optimal when there is CO at the beginning of LL, but still works with two looks. Could use OELLCP algs instead.
    Loses power if no edges to orient, especially if there's a diagonal corner swap. The method still is 2-look using a CP algorithm as the 2GR step, but CLL -> EP would be better.

TL;DR
2GR (EO;CP, EP;CO) can replace OLL PLL in any LL case and is arguably a superior method.
The CP inspection also indicates when there are opportunities to choose a better LL method.
https://www.speedsolving.com/threads/2-gen-reduction-last-layer.61014/#post-1173474
