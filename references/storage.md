---
description : Store data
author : nishkal
tags : ['api', 'references']
cover : ~@buildAssets/api/references.png
---

# storage
<Header/>
[[toc]]

### inMemory
Store temporary data in memory while your code is running. As soon as the window is closed, all data is lost. The data may or may not be JSON serializable.
* see [MemoryStore](/structures/MemoryStore.md) 


### local
Store data locally in an external file. File is created on per project basis. You can only store JSON serializable data.
* see [PersistantStore](/structures/PersistantStore.md) 


### global
Store data locally in an external file. Common for a system. You can only store JSON serializable data.
* see [PersistantStore](/structures/PersistantStore.md) 