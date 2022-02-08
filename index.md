---
layout: default
title: Home
---

I am an assistant professor of [linguistics](https://linguistics.cornell.edu/) at [Cornell University](https://www.cornell.edu/). I am very interested in the incremental representations that humans use to process language, and in differences between how language is used and how it is processed. To explore these topics, I study the relationships between computational language models and psycholinguistic data (e.g., reading times) and I study neural network representations of language to understand what aspects of language can be learned from language statistics directly without having experiences in the real world (i.e. through ungrounded learning).

If you're interested in incremental processing models, you may find these helpful:  
* [LSTM toolkit that can estimate incremental processing difficulty](https://github.com/vansky/neural-complexity)  
* [125 pre-trained English LSTMs](https://zenodo.org/record/3559340)  
* [Left-corner parsing toolkit that can estimate incremental processing difficulty](https://github.com/modelblocks/modelblocks-release)

I manage the [Computational Psycholinguistics Discussions research group](https://c-psyd.github.io/) (C.Psyd) and am part of the [Cornell Computational Linguistics Lab](https://conf.ling.cornell.edu/compling/) (CLab) and the [Cornell Natural Language Processing Group](https://nlp.cornell.edu/) (Cornell NLP).

My surname is easy to pronounce (in words, not IPA): /van 'shine-dull/

### Recent News

Feb 1: Gave an invited talk at UC Irvine: [Neural Language Priming](/assets/pdf/vanschijndel-2022-invited_irvine-slides.pdf)

Jan 25: Gave an invited talk at Dongguk University: [NLP: Neural Language Priming](/assets/pdf/vanschijndel-2022-invited_dongguk-slides.pdf)

Dec 3: Gave an invited talk at University of Chicago: [Language Statistics Won't Solve Language Processing](/assets/pdf/vanschijndel-2021-invited_chicago-slides.pdf)

Oct 15: Gave an invited talk at Georgia Tech NLP Seminar: [Language Statistics Won't Solve Language Processing](/assets/pdf/vanschijndel-2021-invited_georgia_tech-slides.pdf)

Aug 26: [Timkey and van Schijndel (2021)](/assets/pdf/timkey_vanschijndel-2021-emnlp.pdf) accepted at EMNLP 2021: We show that Transformer models consistently develop rogue dimensions that operate at bizarrely inflated scales and track relatively uninteresting phenomena (e.g., time since last punctuation mark). The inflated scale distorts similarity estimates and makes cosine a poor measure of similarity. We introduce a very simple method to correct for the issue that retains all information in the model and requires no retraining.

July 26: [Ryb and van Schijndel (2021)](/assets/pdf/ryb_vanschijndel-2021-cstfrs.pdf): Shows that, although shallow heuristics are used extensively by BERT during NLI, certain kinds of symbolic reasoning also arise in BERT. Some types of reasoning, such as spatial reasoning remain beyond it.

June 25: [Cognitive Science paper](/assets/pdf/vanschijndel_linzen-2021-cogscij.pdf) finally published!\
We show that surprisal (or more generally, single-stage prediction models) can only explain the existence of garden path effects in reading times, not the magnitude of the effects themselves. Suggests the existence of explicit repair mechanisms are involved during garden path processing.

May 10: 2 papers accepted at ACL and ACL Findings.\
1) [Davis and van Schijndel (2021)](/assets/pdf/davis_vanschijndel-2021-acl.pdf): We show that linguistic knowledge in language models can be modeled as constraints. Thus, some linguistic representations can prevent other learned linguistic knowledge from surfacing. We show how to fix this, but more generally we outline a framework for thinking about language representations in neural networks.\
2) [Wilber et al. (2021)](/assets/pdf/wilber_etal-2021-findings_acl.pdf): We explore the abstractive capabilities of automatic summarization models. We show that abstractive summarization is extremely shallow at present, often simply emulating extractive summarization.

Sept 18: 2 papers accepted at CoNLL.\
1) [Bhattacharya and van Schijndel (2020)](/assets/pdf/bhattacharya_vanschijndel-2020-conll.pdf): Neural networks encode abstract filler-gap existence but do not learn more abstract clusterings over kinds of filler-gaps. Raises questions about the depth of abstraction needed to process text sequences.\
2) [Davis and van Schijndel (2020)](/assets/pdf/davis_vanschijndel-2020-conll.pdf): Transformers encode implicit causality verb biases but fail to use that knowledge to make correct predictions. Validates Hartshorne's theory that IC is learnable from language sequences, but suggests that the language modeling objective prevents models from using this knowledge.
