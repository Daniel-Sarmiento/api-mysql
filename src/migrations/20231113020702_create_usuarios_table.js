/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
        CREATE TABLE usuarios (
            id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(200) NOT NULL,
            deleted TINYINT(3) UNSIGNED NOT NULL DEFAULT '0',
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            deleted_at DATETIME NULL DEFAULT NULL,
            PRIMARY KEY (id)
        );
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw("DROP TABLE usuarios");
};
