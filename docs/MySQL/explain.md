# MySQL分析执行效率


` explain xxx`


### select type

查询类型
- SIMPLE 简单查询

### table

表名


### type

#### System

系统表并且只有一行内容

#### Const

等值查询，用到了主键或者唯一索引
返回值只有一行

#### eq_ref

连接查询，并且用到了主键或者唯一索引

#### ref

等值查询，用到了非唯一索引,

#### range

用到了索引，并且是范围查询，比如in(1,2,3) 或者是 between

#### index

用到了索引，扫描了整个索引树

#### All

完全没用到索引，走全表扫描



### possible_key

展示当前查询可以用到哪些索引

### key

实际用的索引

### key_len

索引用的字节数

### rows

估算的可能扫描行数，越少越好

### Extra

附加信息

- Using index 覆盖索引，不需要回表，最好
- Using where 索引定位后，仍需要回表
- Using filesort 排序无法利用索引，需额外排序，大结果集很慢
- Using temporary 用临时表（典型group by，distinct 无索引），更慢