Original Reddit Post
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
