# animals-library

A TypeScript library that lists animal names. The library is defined across multiple npm workspaces.


## Description

I'm not really sure this is a good idea. TypeScript (and modularized JavaScript using ES modules) has a literal 'module'
system. So why take it a step further and modularize the code into separate npm workspace? Well, I don't know if this is
a good idea, but I do this in Gradle projects all the time and it's great. The npm (and related) tooling does not work
so great for this though. I'm missing: task dependencies (a.k.a Gradle directed-acyclic-graph), a notion of cleaning up
stale resources (Gradle's build cache works so well these days), and transitive artifact dependencies across workspaces in
an uber artifact (e.g. a "fat jar") (again not sure this is a good idea).
