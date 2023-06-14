const query = require("../db")

class Contact {
    static findAll() {
        return query('select * from contacts;')
            .then(res => res.rows)
    }

    static findOneById(id) {

        const sql = 'select * from contacts where id = $1;'
        return query(sql, [id])
            .then(res => {
                {
                    if (res.rows.length === 0) {
                        throw new Error(404, 'record not found')
                    }
                    return res.rows[0]
                }
            })
    }

    static create(firstName, lastName, email, phone) {
        let sql = 'insert into contacts (firstName, lastName, email, phone) values ($1, $2, $3, $4) returning *;'

        return query(sql, [firstName, lastName, email, phone])
                .then(res => res.rows[0])
    }

    static update(contact) {

        const sql = 'update contacts set firstName = COALESCE($1, firstName), lastName = COALESCE($2, lastName), email = COALESCE($3, email), phone = COALESCE($4, phone) WHERE id = $5 returning *;'
        return query(sql, [contact.firstName, contact.lastName, contact.email, contact.phone, contact.id])
        .then(res => res.rows[0]);
    }

    static delete(id) {

        const sql = 'delete from contacts where id = $1 returning *;'
        return query(sql, [id])
    }
}

export default Contact


