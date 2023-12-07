import { sortBy, sum, uniq } from "lodash";

const testInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const realInput = `557T5 626
A777A 673
363Q6 158
63J35 229
TKKKK 401
AAA34 653
77888 946
8T829 576
TTT2T 296
43752 88
4JT4T 188
6655T 629
QQ333 858
2J959 793
69QK2 743
K8628 196
26266 75
Q6996 635
3J553 440
79957 964
Q2J9A 130
AQQ66 847
Q5Q8J 856
6777Q 568
44JJ4 841
46236 802
88898 683
787KK 616
QT9T5 625
4AK27 889
66624 913
23JJ3 118
J88J9 816
KAJQ6 454
J8876 171
2222J 493
TK5T5 624
KQQQT 319
2KK2K 360
28829 757
AATJT 205
8KAAQ 514
J8964 845
39K56 958
7J735 326
9376T 571
978T4 389
J944Q 180
J5422 380
63696 495
KQ2QK 924
46564 438
5J5K7 8
TTT58 113
JJ99J 598
J3KQT 109
K9AA9 276
69T99 116
747Q4 411
J2934 918
4AA34 707
23293 255
335J3 178
394JK 570
A5KAT 836
63863 144
T83J2 257
J77J7 792
88829 499
69667 382
5A448 520
73TK2 258
85A2J 528
T9489 975
T68TA 56
T89TT 730
JJJ8J 317
KA7AA 316
22J2J 312
7T5KJ 967
66K36 714
48844 855
7A5A2 808
QKQKQ 786
QQQ4Q 498
7J77Q 42
KTK8J 870
75454 271
73327 502
T66TT 971
T7957 509
47243 365
6QA4K 297
K9232 737
88AT8 26
45455 588
86868 181
76666 147
46676 311
69695 199
7JJ9A 742
33632 73
46KKK 885
AA56K 87
77776 580
QQ996 139
73479 694
A7AJJ 735
62226 101
87777 798
9JQ99 102
A7K86 688
Q3233 773
TJ9TT 787
8QTQQ 947
J6T65 449
779J7 49
Q66KQ 890
77752 706
66566 779
K6K6K 269
K7K38 415
88774 328
5J555 672
99969 283
Q3Q3Q 663
67Q8T 186
A89A9 503
8T87Q 669
69K87 264
69996 112
AAQ7A 811
885QT 709
TJ734 988
7Q7QQ 977
K335T 928
Q78AQ 432
8444J 679
66663 140
24966 978
2847Q 321
55266 659
AAJAA 842
3J883 877
49992 371
34633 111
AA8AA 353
9A998 788
4KKJ4 175
66J86 562
67AJ6 719
A62A9 129
47AA4 591
29592 739
82A8A 565
33324 634
49QKJ 425
Q244Q 664
4A96Q 23
59955 22
KKK8A 222
974KT 752
T22TT 727
J3383 231
TA7K2 831
99AAA 603
6TTQK 899
4K444 477
33939 809
A77AA 545
T66K6 417
775QQ 343
7A7K7 641
7JJ66 388
T7666 34
QQQ39 904
T2352 95
94994 266
K88TT 636
94996 209
9T9AT 898
JTT4T 13
A8J3Q 984
64666 78
49J44 501
TA558 593
29KT6 973
5TK6T 662
55575 169
QA39K 900
89QJ4 648
T8QA5 349
7Q997 902
3AT6Q 693
KJ84K 284
69AAA 327
45444 911
83933 878
QJJQJ 650
A3A5A 927
KJ99Q 489
8Q5J5 470
997J3 467
4A973 35
76677 115
63JA7 100
68558 282
TT7TA 822
QTJ5K 666
ATJQK 128
AA88A 424
T6966 497
59TJQ 430
3355K 660
TK8A7 253
2T772 368
K7935 760
82A36 197
KTTK5 604
KJKJK 132
5JQ52 523
A22QQ 122
JAA99 725
A4Q52 369
9922T 141
933Q3 484
T456Q 617
33933 308
55545 346
KKK4K 329
JA48Q 547
87289 893
84388 134
8TJ8T 456
A34QT 987
TK4JA 968
Q9Q9T 722
T6AJA 950
4K4K8 303
6Q4Q2 285
TTQTT 63
2Q9J7 647
5A5A4 813
88T8T 933
Q9KQQ 246
253Q5 692
3T926 487
2249A 6
99AT7 413
J2KA5 422
9QQ89 994
72288 546
28A34 997
4Q668 334
32J33 12
836T4 982
58888 517
6K6QK 575
Q5384 170
Q6333 825
2934A 869
69274 645
8T89K 356
Q9JQ9 837
9K5K5 161
488QQ 194
3T3TT 461
83Q52 939
9Q443 451
K6275 414
3Q7Q3 700
47777 435
22228 469
QQ4QJ 868
A666A 995
7AJ3A 210
254AJ 785
77222 794
33A35 66
25257 165
6535J 195
K5K55 586
87A62 584
TTKTT 815
KAQ85 594
8AAKJ 43
86683 838
KJJKJ 704
64TQ6 867
T5TTT 843
25255 3
QTJ3J 261
QKT2T 639
33K33 516
J5JJ4 372
4T2J6 59
69235 777
334T2 826
T5J7J 717
64T44 351
KTTKK 703
36238 151
3434J 125
4J744 764
5K38A 656
268JA 71
3J3K8 14
355Q5 513
88JT8 4
8TATJ 357
78J7J 895
K797K 854
9K889 799
846A4 15
K6K57 732
42A22 21
4KK9K 120
42454 53
66JQ6 646
KKKQK 119
53395 560
74TQA 783
QQQ85 40
6QK48 114
TQT2A 830
7JQ97 494
66828 833
46644 962
T4T88 236
55Q55 84
22QQ9 879
6T5JJ 549
263T6 632
K66AK 338
86J86 262
K3977 772
66Q66 215
3TTJ3 238
J44JK 201
34442 970
J79K9 849
5558J 287
9J9Q3 159
AAA22 182
TQ3K6 293
Q88Q3 245
67576 227
28JQ5 943
33AKA 961
676J6 1000
J72A7 381
2973J 458
AK2J7 930
5QQA2 510
TTK4T 7
Q3QQ7 754
9T99A 812
45Q44 942
3KKKK 542
2AA22 807
66JJJ 361
82283 202
88J88 25
64466 320
K3J96 614
T97T9 85
3JK93 54
4Q9TQ 887
977QK 908
J72JJ 486
A2Q2A 98
7K7AK 697
T656T 292
A3TTQ 404
66KK6 408
9Q26A 874
J33KK 117
Q2224 608
4K4Q2 137
23322 876
JKQKK 685
95QJK 219
7877J 538
666TT 804
742K5 223
JJAAA 500
A4888 348
TQQQT 791
885T5 301
8AQ83 55
5J6A2 864
9AKK9 410
8J9J7 376
444Q4 226
77722 96
6J88A 27
TTTJT 298
TJKA5 288
A8A8J 36
K7QJ6 723
3KK3K 344
2624K 512
36336 681
55J25 552
76T86 38
K9J6Q 204
TA26Q 11
55TT8 460
TQ47K 472
2T3A5 920
5J6K6 859
79994 504
7685Q 862
4TQ44 803
484Q8 747
J33T3 387
QT6TQ 148
56J86 582
K3Q4K 490
9A9A9 479
A3AT3 919
58785 637
2A8A2 172
2Q755 307
K9798 278
JK2TA 252
345J2 710
9J339 957
K9949 999
Q5Q49 665
3A69K 780
25QQ2 81
J2944 621
8T3KT 715
8KT5K 154
A4K7T 275
4TA5A 363
43K8J 335
3TT83 91
6J256 341
K7A4A 330
9Q939 765
9999K 563
JJ878 10
A36AA 273
33336 256
44484 894
7KK6K 871
JTQ5J 795
848J8 991
2AKAA 687
99444 776
T464K 768
4444A 759
8J6K8 445
TQ49A 429
585A8 198
6K5K3 551
47444 392
6J378 755
77672 439
66866 459
3AQ5J 441
92QAK 220
QJJ66 738
2K37A 176
T5TJT 406
85JJA 39
22775 618
3JT55 77
3K32Q 240
72333 434
JJTTT 419
QK29K 105
J5K64 940
KKKKJ 566
T4T52 579
777J2 741
Q7QQQ 506
94Q72 853
7QJQQ 713
TJ95J 153
55328 782
AT934 613
3679K 676
8T528 525
8562T 124
36T99 86
Q77Q2 573
23J52 218
JT8J6 921
7KT77 121
63T83 753
273T8 602
99499 607
9994Q 527
AQ72A 420
QJQQQ 770
2A94A 355
6JKJ6 775
73QTT 561
JTT8T 106
JTJA3 620
JK247 810
QJJKQ 819
633K3 5
88228 910
7QJQ3 619
Q448Q 784
83599 482
48QQ9 299
9993T 228
ATTTA 385
J2982 232
84864 234
J664J 123
4A6TQ 281
K249A 51
J9Q37 884
TTT3T 350
884T7 682
66868 745
4K7Q4 89
5KK3J 149
A8444 744
3A8T9 951
3AA99 557
KK823 705
222TT 872
44TT4 611
J3QJ3 912
AQAT7 28
T5Q5Q 536
KK5K5 384
TT88T 455
28J98 972
9988A 979
79767 835
T5JTK 213
KK7JJ 126
T78J6 44
A3KJA 986
8JT77 990
366JJ 736
Q9A43 559
6Q6QT 689
AA5A5 471
59TAJ 901
J369T 304
97J8A 892
83333 980
2A57J 965
2KJ95 644
64J44 597
4KJ44 152
8282J 70
3Q333 761
JT753 99
T44TA 200
727K7 447
AA5AA 241
AAA56 905
QQQJJ 68
K7Q95 596
487K5 142
5J64A 251
466J6 699
999J7 531
A89K6 127
55J56 464
8786K 818
967TA 774
KJ7Q4 110
75535 767
K9572 746
797TA 749
244TQ 569
88QJ8 302
2J522 57
KAAK7 72
TKKK7 377
28547 766
37877 996
776K7 907
J26J9 138
QK235 362
6Q297 601
38QJ8 131
33TJ5 740
K8888 314
85A2A 58
6329Q 944
5A273 519
76786 731
72AA7 166
9TJT9 728
T6TQ6 145
86885 446
J5595 935
AA839 834
999KJ 358
T7Q77 212
K8K8Q 399
9T8QK 224
83J3J 643
7T84K 708
2TT8T 189
JTK9T 279
T999T 936
22KKA 671
9599Q 649
KKK8T 574
28282 828
9438T 97
2968J 698
3Q4Q3 667
83222 623
86QJQ 453
TT7AA 805
86JAQ 589
85655 485
4466K 163
QAAAQ 160
K9393 366
85558 642
49JJ4 840
JTQ7T 480
Q6QQQ 418
337Q2 801
88789 925
564KA 505
T829Q 405
4AT77 896
TAAA8 507
9AAAA 62
7J766 286
J88J8 937
Q4Q35 216
7888K 19
4969A 367
44224 289
T3338 600
T5T59 259
5KJ6A 465
A4AA8 61
49948 675
223Q2 280
QTK4A 268
756AK 839
7A4QJ 903
69577 518
29TQ2 790
29K4T 69
55665 750
239T5 832
A2522 521
TA77T 306
J3QK2 452
6JKK6 390
98T72 1
2KQA8 179
98989 431
75757 76
9J99T 29
T2TJJ 183
2AAT9 532
22QQ2 235
7452Q 254
5899J 949
53TT5 462
35566 652
3A398 914
Q772T 400
7J777 374
53353 535
J462Q 851
J28TQ 32
24888 225
55535 684
J353J 83
K226J 395
8TJ99 45
Q2943 860
2A6KA 959
Q7227 631
55556 883
AA444 983
T97AJ 265
8764Q 934
2Q62Q 263
74377 875
K7KA2 758
TAA9A 443
3T4J2 989
T6TTT 701
5QT4K 592
6969J 578
77TTT 556
A86K3 364
T55A5 909
68355 442
77392 393
A85Q8 605
994A9 359
2J7T7 661
2A662 214
4939J 630
7A6J5 848
4K9A6 748
723Q9 932
55A55 206
T2J6T 873
3789A 583
3A82K 891
K9K99 953
K38K3 33
53493 756
T3TT8 929
4T4TT 437
62762 481
73T77 90
T8973 530
55558 861
45762 496
77KKK 107
J55J4 554
777Q8 537
26666 60
JT7TT 690
438K5 184
997J4 817
65777 162
J8467 543
A3AA3 103
677JJ 274
JTT66 421
66J66 478
A59AK 412
777T7 426
664QK 474
QT837 294
8727A 969
596T5 17
22K26 397
75477 585
66696 917
K8T9J 407
AA7AA 135
36676 716
72T56 2
36636 221
99789 92
2AK9T 249
Q5255 444
934A9 952
48K48 242
49A4A 966
Q84K9 457
55J5T 948
8AJ95 108
TJ7Q6 612
QQ2QJ 323
TQT68 720
Q57KT 587
34444 143
644A4 403
849TJ 733
JAK7K 342
6QKQ5 711
7J7Q3 581
9A83J 492
337J3 20
T6AKT 190
2488J 104
A4KK4 427
7988T 164
966A6 300
TQ4QA 352
K9KJK 654
37733 670
6TJK6 30
92242 433
95553 508
93399 511
6QT66 880
J7AA7 751
QA9KQ 177
72233 248
K88KK 640
2Q5JQ 544
JJ333 897
T75T7 938
A8JA7 797
73777 24
88899 771
38AAA 333
62347 627
2A888 821
JTKAK 590
286T6 572
36T63 577
22248 985
23332 658
4T3JT 655
22J27 52
248KA 173
JK2Q6 992
68T3Q 550
82299 409
96Q3J 702
QQQQA 345
4QQQT 185
4TK4J 331
J4444 882
A2555 778
9292J 230
22232 668
K64K4 193
82434 207
5Q5Q9 724
K56K6 954
QK2KK 37
Q9937 47
8AA88 976
A5994 208
3A3KK 174
99J36 41
98599 322
8AK59 46
55Q88 375
337TQ 65
T7TTT 696
QQ663 476
2J842 888
96Q47 192
23579 396
6TT7T 844
4T444 865
44554 886
2KK5K 622
K39KA 133
46J79 827
5QKK5 923
K585K 237
77799 633
J9Q2Q 50
3J773 491
QQ8Q8 247
K96TK 187
32T98 475
K8K88 383
8887J 678
5J37A 595
44AAJ 448
JJJJJ 762
27797 628
Q55Q5 555
KKAK4 998
8ATQ3 315
23335 881
AKKAA 332
66J6J 217
Q4Q99 80
99JJ9 721
62Q6Q 9
249TA 423
444JT 398
A93JK 146
2A722 524
3275T 553
T4TTT 800
49K4K 610
2J332 347
KK222 64
J5888 67
22KAA 354
2K3J7 515
8A257 463
K4448 769
25648 606
92992 657
38KA8 295
9999J 233
72222 416
QQQ95 136
323JT 993
7A727 93
777Q2 548
TAKKK 534
677J7 339
Q3J3Q 651
Q3JT8 324
32JQQ 974
Q44QJ 529
77797 488
TQAK3 926
56TJT 203
A8QQT 712
AJ32K 609
5A995 677
55Q59 428
42492 277
T62T2 931
58885 558
T73T3 270
T8T56 391
T3949 956
5Q5T2 386
9985Q 267
KK333 526
3JJTT 318
4A44J 450
2K9TK 48
K63JA 74
779A5 695
94J59 945
Q6J57 272
88638 150
24A4A 373
T6J86 168
A3322 239
KJ777 211
23K55 340
KTK66 402
QQ57Q 680
Q8888 336
33533 468
TTQT7 370
222K2 167
TTT99 866
K93K9 157
5TTT2 564
K4K4K 540
7894J 599
Q3QQQ 310
2JTTT 781
T67JT 260
42K3T 955
88Q68 829
57257 729
96625 922
4KAJK 638
34338 806
JJ2AK 18
7777Q 916
3TKA8 823
J3352 156
88788 941
3J4A6 313
QKQKK 963
822TT 863
49545 16
TK3J6 691
A555J 337
754KQ 541
26398 539
44222 325
2JT25 522
KK9KT 734
799QQ 473
434J4 305
69686 915
T8853 244
333J3 814
56J5T 379
26785 726
977QQ 960
66AJA 155
JTJT5 850
5JJ55 686
8K839 857
87K35 820
2KKKK 191
5A8QA 674
622T6 763
Q6QQ4 378
J2A62 981
Q5J5Q 567
79853 94
KJ888 718
A8957 789
37A37 483
KKAAK 852
34Q8K 291
84287 31
7K53J 394
95599 290
AKAAA 824
5546T 615
QQTT2 796
J3552 82
6K76K 436
3TJTT 533
T4729 243
55T5Q 846
52262 250
4KA46 309
7A8A8 466
76KK3 906
TTT8T 79`;

const ORDERED_LABELS_WEAK_TO_STRONG = [
  "A", // stroongest
  "K",
  "Q",
  //"J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2", // weakest
  "J", // weakest part II
].toReversed();

/**Five of a kind, where all five cards have the same label: AAAAA
Four of a kind, where four cards have the same label and one card has a different label: AA8AA
Full house, where three cards have the same label, and the remaining two cards share a different label: 23332
Three of a kind, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98
Two pair, where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432
One pair, where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4
High card, where all cards' labels are distinct: 23456 */
const ORDERED_NUMBER_OCCURENCES_STRENGTH_WEAK_TO_STRONG = [
  "5", // Five of a kind - strongest
  "4 1", // Four of a kind
  "3 2", //Full house
  "3 1 1", //Three of a kind
  "2 2 1", //Two pair
  "2 1 1 1", //One pair
  "1 1 1 1 1", //High card - weakes
].toReversed();

const replaceJokerOnceAtMostFavorablePlace = (labels: string[]): string[] => {
  const uniqueLabels = uniq(labels);

  const numberOfOccurencesByLabel = sortBy(
    uniqueLabels.map((uniqueLabel) => ({
      number: labels.filter((label) => label === uniqueLabel).length,
      label: uniqueLabel,
    })),
    ({ number }) => number
  ).toReversed();

  const numberOfOccurencesByLabelOtherThanJ = numberOfOccurencesByLabel.filter(
    (occ) => occ.label !== "J"
  );

  if (!numberOfOccurencesByLabelOtherThanJ.length) {
    return labels; // already a full house
  }

  const letterToAddTo = numberOfOccurencesByLabelOtherThanJ[0].label;

  const newLabels = labels.join(" ").replace("J", letterToAddTo).split(" ");

  return newLabels;
};

const getNewHandWithReplacingJokers = (hand: string) => {
  const labels = [...hand];

  const jokerOccurences = labels.filter((label) => label === "J");

  const realLabels = jokerOccurences.reduce(
    (acc) => replaceJokerOnceAtMostFavorablePlace(acc),
    labels
  );

  return realLabels;
};

const getRelativeStrengthOfHandType = (hand: string) => {
  const labels = [...getNewHandWithReplacingJokers(hand)];

  const uniqueLabels = uniq(labels);

  const numberOfOccurencesByLabel = uniqueLabels
    .map(
      (uniqueLabel) => labels.filter((label) => label === uniqueLabel).length
    )
    .sort()
    .toReversed()
    .join(" ");

  return ORDERED_NUMBER_OCCURENCES_STRENGTH_WEAK_TO_STRONG.indexOf(
    numberOfOccurencesByLabel
  );
};

const getRelativeStrengthOfHandComposition = (hand: string) => {
  const labels = [...hand];

  const strongnessByLabel = labels.map((label) =>
    ORDERED_LABELS_WEAK_TO_STRONG.indexOf(label)
  );

  return strongnessByLabel;
};

const compareHands = (
  { hand: handA }: { hand: string },
  { hand: handB }: { hand: string }
): number => {
  const [relativeStrengthOfHandTypeA, relativeStrengthOfHandTypeB] = [
    handA,
    handB,
  ].map(getRelativeStrengthOfHandType);

  if (relativeStrengthOfHandTypeA - relativeStrengthOfHandTypeB !== 0) {
    return relativeStrengthOfHandTypeA - relativeStrengthOfHandTypeB;
  }

  const [strengthOfHandACompositionByCard, strengthOfHandBCompositionByCard] = [
    handA,
    handB,
  ].map(getRelativeStrengthOfHandComposition);

  for (
    let cardIndex = 0;
    cardIndex < strengthOfHandACompositionByCard.length;
    cardIndex++
  ) {
    if (
      strengthOfHandACompositionByCard[cardIndex] -
      strengthOfHandBCompositionByCard[cardIndex]
    ) {
      return (
        strengthOfHandACompositionByCard[cardIndex] -
        strengthOfHandBCompositionByCard[cardIndex]
      );
    }
  }

  throw new Error("exact same hands: " + handA + "," + handB);
};

// const sortedHands = realInput
//   .split("\n")
//   .map((line) => ({
//     hand: line.split(" ")[0],
//     bid: parseInt(line.split(" ")[1]),
//   }))
//   .toSorted(compareHands);

// console.log(sortedHands);

// const winnings = sortedHands.reduce(
//   (acc, value, index) => acc + value.bid * (index + 1),
//   0
// );

// console.log(winnings);

const inputTestPart2 = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const sortedHands = realInput
  .split("\n")
  .map((line) => ({
    hand: line.split(" ")[0],
    bid: parseInt(line.split(" ")[1]),
  }))
  .toSorted(compareHands);

const winnings = sortedHands.reduce(
  (acc, value, index) => acc + value.bid * (index + 1),
  0
);

console.log(
    sortedHands.map(({ hand }) => ({
      hand,
      newHand: getNewHandWithReplacingJokers(hand).join(""),
    }))
  );
  
console.log(winnings);