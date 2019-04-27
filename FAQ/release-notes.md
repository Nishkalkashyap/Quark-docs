# Release Notes

[[toc]]

<!-- Quark-0.2.3-start -->
## Quark 0.2.3 - April 27, 2019

#### Features:
* Added textmate for better syntax highlighting.
* Added monokai and one dark theme.

#### Bug fixes:
* Fixed settings scope bug.Workspace settings now take precedence over global settings.
* Fixed persistant store onDidChange() method. Now using fs.watcher to detect file changes.
* Fixed window crash while adding extra libs to an opened editor.
* Fixed window state restore handle.

!!! info See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-linux-amd64-0.2.3.deb": "YhJOXf6dpf6UK1Kj5KlNbpUFMIHWbZpzk66EhMd00dgal5PRzl7+N1vJYpP9tMY1+Qsjk9isgwf7lgWuhdmsLw==",
    "Quark-win-0.2.3.exe": "yegBc3OrBQ52K8/zYoP9zQtyC9Q7leWx+ZwPKFeTXQBXQ7l1TaipUiVcsBRXypGfPonGFcBJCWXWJ25XwpYEjQ==",
    "Quark-win-x64-0.2.3.zip": "TF7OveAisI2m2anFtrxFqWV06PoGvhSRxBiBCq461t5a+b/o4FalFASZaXU7T7Pp3Hmn6rRewhG+6ck1fkZmHw==",
    "Quark-linux-x64-0.2.3.tar.gz": "m55LLmxwehwhoQ+07wOZcTRdUQW8BS4XKSvqMwRWPYytpl8Np4EsKdNPZqIxxDNflxryYF+mkjXD+iFjZo/2jw==",
    "Quark-linux-x86_64-0.2.3.AppImage": "X/b9rVqYWyuNXJK2nDoCx3w3EOPFiRQFyD4UZrjAbtVKjX5qtJJgZWxCJU8uwg7PzzL6ta5nZUho/GFoU+BXAQ=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.2.3-end -->


<!-- Quark-0.2.2-start -->
## Quark 0.2.2 - April 25, 2019

#### Features:
* Added restore view state snackbar.
* Updated monaco addExtraLibs scripts.


#### Bug fixes:
* Fixed snackbar.dispose (not working) bug.


#### Dependencies:
* Added: `recursive-readdir@2.2.2`


!!! info See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-linux-amd64-0.2.2.deb": "pi3hC2PxXrrYLdsZthqUgqhW52bA0oTa9AwNuRAU9XQr3WCWjMyAmbYUCtUz01lOAjqUmqjbRbKfiEtMPWvLjQ==",
    "Quark-win-0.2.2.exe": "BarPWj/554yX3B2wwZ7U/AjwRVdAAKhkrxyKZ0+0O63svJcsPycVAUltlBHYAHS6BT0GhHT9df2/ejr4sOtihw==",
    "Quark-win-x64-0.2.2.zip": "W0354E/y8vA/cCqiNMgahdTPxa60HFRs22Wq+MskArpl7dZdD7lCxvTKB+mudzy8tMmYk17DiwAZN8glplt3qQ==",
    "Quark-linux-x64-0.2.2.tar.gz": "Zdx1LbWe0fxUEo6P8a8016pIxvYtfAEGHaxIul/nhZN02fJmCCHZ9rkIJVH+ggqVLdvnCeX8ySelGGUhkVcAKw==",
    "Quark-linux-x86_64-0.2.2.AppImage": "ff41SXtCluF1AoI6NLoM5vs51qIcMqN39Gt5YBY1v1eEKhV2KZdSo/kzSbDpR/b/L6HpCh1hE5oWBGeLQVR+vQ=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.2.2-end -->


<!-- Quark-0.2.1-start -->
## Quark 0.2.1 - April 23, 2019

#### Minor Changes:
* Adding element in view.createView* methods now optional.
* Updated landing page.
* Updated npm install component script.

#### Features:
* Added support for jsx.
* Added bable-loader presets for react.
* Added markdown support with markdown-loader.
* Added support for types definition in project directory.

#### Bug fixes:
*  Fixed missing bable-presets path error.
*  Downgraded electron version to 4.1.3.

#### Dependencies:
* Added: `react@16.8.6`
* Added: `react-dom@16.8.6`
* Added: `markdown-loader@5.0.0`
* Added: `html-loader@0.5.5`
* Updated: `electron@4.1.3` (Previous: v4.1.4)
* Added: `@babel/preset-env@7.4.3`


!!! info See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-linux-amd64-0.2.1.deb": "G89YxF80AHLOvYYPlFiIQDx60P+vW+3WQETBoF6rYpQL9i/cdURcBESl5ABgsSuNHcZJf2CCf2MeFGjeDoeQLw==",
    "Quark-win-0.2.1.exe": "hlBIew8g6afXs5FamgxYwXEZ63Wege1pXfNc6xH8At3QnTeTPYpg1+VCzXhP+UUFhSWht7Vx51FJFm9pMzn/jg==",
    "Quark-win-x64-0.2.1.zip": "FeRu46igba71A9y3hwjlsxbnqwNywWD3KFZOefsafLp+sgAxi6YzyP0HwegXyS93cWN3d3eLcs1oNnlMKJER8g==",
    "Quark-linux-x64-0.2.1.tar.gz": "b9TO/D88ESVu3brZ5UUypi/IqsiC29G8OLFoopXpKZI69iJHB2fYrhc8HaeyMMTqOk19Efkp6JzGAI0PZ5tV1g==",
    "Quark-linux-x86_64-0.2.1.AppImage": "iNNvXxftWiW8OnxM+A/FoMcBJirRH4FQZJcxLHV5YMEsgv2oWZMVI0SzSPqw7vzW9KyVQ61vtvhNDdskY5w8Ig=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.2.1-end -->


<!-- Quark-0.2.0-start -->
## Quark 0.2.0 - April 22, 2019

#### Minor Changes:
* Updated angular version in template.
* Major dependency updates in build.

#### Dependencies:
* Updated: `webpack@4.30.0` (Previous: v4.29.6)
* Updated: `vue@2.6.10` (Previous: v2.6.8)
* Updated: `vue-template-compiler@2.6.10` (Previous: v2.6.8)
* Updated: `p5@0.8.0` (Previous: v0.7.3)
* Updated: `node-pty@0.8.1` (Previous: v0.7.8)
* Updated: `johnny-five@1.0.0` (Previous: v0.15.0)
* Updated: `ionic@4.12.0` (Previous: v4.10.2)
* Updated: `electron@4.1.4` (Previous: v4.1.3)
* Updated: `electron-store@3.2.0` (Previous: v2.0.0)
* Updated: `electron-log@3.0.5` (Previous: v3.0.1)
* Updated: `css-loader@2.1.1` (Previous: v2.1.0)
* Updated: `chokidar@2.1.5` (Previous: v2.1.2)
* Updated: `chart.js@2.8.0` (Previous: v2.7.3)
* Updated: `builtin-modules@3.1.0` (Previous: v3.0.0)
* Updated: `@babel/core@7.4.3` (Previous: v7.3.4)


!!! info See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-linux-amd64-0.2.0.deb": "du19RF/Vgx3+1HPDohAGW36SaqVnR0JMHdZjRygdknCr7TejQ/PutkiUqnelB67dIfbMi5VjS8qIQ8pXnc1PYQ==",
    "Quark-win-0.2.0.exe": "ecSS0qJFDhPLLyZ0G7zmqaFJqq9BRkv1JQiPxk2dCuKNigV5/EBa5lWTROP1f02fAkLgDuCQ+JOkRxgVzAkE3w==",
    "Quark-win-x64-0.2.0.zip": "v7q/jmmbNZVV9oqRCY/Rr+/OY2AMjnml5gCN3MIlrEbYvblD8yEfKro2CUGrASav5QalqJ9Crf2tomRZnwNisA==",
    "Quark-linux-x64-0.2.0.tar.gz": "hXJY76RwNgt4JV52qxWdtzsOaA7aMuTAm2oqN//HK0e3j4OInWfRq8ROGf9KXlWFHTw9fC17Xt0dKG7bzQb0tQ==",
    "Quark-linux-x86_64-0.2.0.AppImage": "0d8AOrHaa04uY9Vj0k6/6nvr9lsvcFH4pknbA/Lyk309XgWP5KkAVnblUMBlXSCcNL1TcHqlYmTgZxzDSlfbnQ=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.2.0-end -->


<!-- Quark-0.1.19-start -->
## Quark 0.1.19 - April 20, 2019

#### Minor Changes:
* Fixed windows nsis installer issue.
* Added builds for *.tar.gz, *.deb and *.zip
* Added shasum check table

!!! info See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-linux-amd64-0.1.19.deb": "mOoXmJWxwtlVzhiG9V+/0gw5+rQgYbPsFsBNxbXSB6BoEvts0vN8nEc+BioyjpA5cN3Lx0VTyAEbm/mE/NZNNQ==",
    "Quark-win-0.1.19.exe": "zImOKl1f13HgunFcnWmAhTp6YLdCqjqhMcY88n8Ap+a0pCN/XRSKaanTv5o+h6lvKiYejPTDxJDtjwF6mYGA2Q==",
    "Quark-win-x64-0.1.19.zip": "eqgGOooaRzn2VJqK/mENze830pSLe/+n1zWz6Km6ijp28kq2m8tFt2w94SkC1YnI2uEIS2dQ1uALk8+QSNZyjA==",
    "Quark-linux-x64-0.1.19.tar.gz": "dIx/SsTLJMfNCd7pR5+8paaFpgFgIbRlRUU50lL4pAxzsW9TltFhFqokJ3MUVtlmns8Y9FfJ/b4ITapTBgQd5w==",
    "Quark-linux-x86_64-0.1.19.AppImage": "/q6HfREVZUeeuqh5V+tvVf/gjAWS+MvnXAXCcOPn832sDf+tL5sMB3f4b2ntglTTjakCmnotYAljmeXIg3+QtQ=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.1.19-end -->


## Quark 0.1.18 - April 17, 2019

#### Minor Changes:
* added language support for readonly editor.
* added release notes, about and license links in help menu.
* on every auto-update Quark will show release notes. 


<!-- ---------------------------------------------- -->


## Quark 0.1.17 - April 17, 2019

#### New Features
* added support for p5.js


<!-- ---------------------------------------------- -->

