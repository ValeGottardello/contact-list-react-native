import { query } from "../db"

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

    static create(contact) {
        let sql = 'insert into contacts (firstName, lastName, email, phone) values ($1, $2, $3, $4) returning *;'

        return query(sql, [contact.firstName, contact.lastName, contact.email, contact.phone])
                .then(res => res.rows[0])
    }

    static update(contact) {

        const sql = 'update contacts set firstName = $1, lastName = $2, email = $3, phone = $4 where id = $5 returning *;'
        return query(sql, [contact.firstName, contact.lastName, contact.email, contact.phone, contact.id])
            .then(res => res.rows[0])
    }

    static delete(id) {

        const sql = 'delete from contacts where id = $1 returning *;'
        return query(sql, [id])
    }
}

export default Contact



