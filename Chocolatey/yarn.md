# yarn

## yarn install & usage (v0.16.1)

https://yarnpkg.com/en/docs/install
https://yarnpkg.com/en/docs/usage
https://github.com/yarnpkg/yarn

https://yarnpkg.com/en/docs/cli/install

https://yarnpkg.com/en/docs/cli/add


```sh
# powershell
> choco install yarn -Y

> yarn --version
or
> yarn -V

# (0.16.0) ??? !== (v0.16.1)

> yarn init 

# "name" : "value",
> [value can not be include spaces!]

# package.json



# Installs a package

> yarn add

## out of date
> yarn
or
> yarn install

``` 

## add

Installs a package and any packages that it depends on.

Adding dependencies 

When you want to use another package, you first need to add it to your dependencies. 
This means running yarn add [package-name] to install it into your project.

This will also update your package.json and your yarn.lock so that other developers working on the project 
will get the same dependencies as you when they run yarn or yarn install.

Most packages will be installed from the npm registry and referred to by simply their package name. 
For example, yarn add react will install the react package from the npm registry.

You can specify versions using one of these:

yarn add package-name installs the “latest” version of the package.
yarn add package-name@1.2.3 installs a specific version of a package from the registry.
yarn add package-name@tag installs a specific “tag” (e.g. beta, next, or latest).
In general, a package is simply a folder with code and a package.json file that describes the contents. 
You can refer to a package a number of different ways:

You can also specify packages from different locations:

yarn add package-name installs the package from the npm registry 
unless you have specified another one in your package.json.
yarn add file:/path/to/local/folder installs a package that is on your local file system. 
This is useful to test out other packages of yours that haven’t been published to the registry.
yarn add file:/path/to/local/tarball.tgz installs a package from a gzipped tarball 
which could be used to share a package before publishing it.
yarn add <git remote url> installs a package from a remote git repository.
yarn add https://my-project.org/package.tgz installs a package from a remote gzipped tarball.
Caveats 

If you have used a package manager like npm previously, you may be looking for how to add global dependencies.

For the vast majority of packages it is considered a bad practice to have global dependencies
 because they are implicit. It is much better to add all of your dependencies locally 
 so that they are explicit and anyone else using your project gets the same set of dependencies.

If you are trying to use a CLI tool that has a bin you can access these in your ./node_modules/.bin directory.
 You can also use the global command:

yarn global add <package...>
Commands 

yarn add <package...>

This will install one or more packages in your dependencies.

yarn add <package...> [--dev/-D]

Using --dev or -D will install one or more packages in your devDependencies.

yarn add <package...> [--peer/-P]

Using --peer or -P will install one or more packages in your peerDependencies.

yarn add <package...> [--optional,-O]

Using --optional or -O will install one or more packages in your optionalDependencies.

yarn add <package...> [--exact/-E]

Using --exact or -E installs the packages as exact versions. 
The default is to use the most recent release with the same major version. 
For example, yarn add foo@1.2.3 would accept version 1.9.1, 
but yarn add foo@1.2.3 --exact would only accept version 1.2.3.

yarn add <package...> [--tilde/-T]

Using --tilde or -T installs the most recent release of the packages that have the same minor version. 
The default is to use the most recent release with the same major version. 
For example, yarn add foo@1.2.3 --tilde would accept 1.2.9 but not 1.3.0.