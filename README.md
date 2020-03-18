

# SOLID

## Single-responsibility Principle
A class should have one and only one reason to change, meaning that a class should have only one job.

## Open-closed Principle
Objects or entities should be open for extension, but closed for modification.

## Liskov substitution principle
Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

## Interface segregation principle
A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.

## Dependency Inversion Principle
Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.


# Project setup

- Node Version Manager
    - Install NVM: https://github.com/nvm-sh/nvm
    - Configure node version for project 
        - `echo ##.## > .nvmrc`

- Typescript
    - Install: `yarn add -D typescript`
    - Scaffold configuration: `npx typescript --init`

- Eslint 
    - Setup guide for eslint with typescript
        - https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
    
- Prettier
    - Install prettier `yarn add --dev prettier`
    - Guide for configuring prettier with eslint
        - https://prettier.io/docs/en/integrating-with-linters.html
