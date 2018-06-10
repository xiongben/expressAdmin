var userSqlMap={
    getById:'SELECT * FROM my_army WHERE id = ?',
    getByName:'select * from use_info where username = ?',
    login:'select * from use_info where username = ? and password = ?',
    add: 'insert into use_info(username, password) values(?, ?)',
    list:'select * from use_info',
}

module.exports = userSqlMap;