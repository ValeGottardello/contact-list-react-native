const db = require("../db")

class Contact {
    static findAll() {
        return db.query('select * from contacts;')
            .then(res => res.rows)
    }

    static findOneById(id) {

        const sql = 'select * from contacts where id = $1;'
        return db.query(sql, [id])
            .then(res => {
                if (res.rows.length === 0) {
                    throw new Error(404, 'record not found')
                }
                return res.rows[0]
            })
    }

    static create(contacts) {

        let sql = 'insert into contacts (firstName, lastName, email, phone) VALUES '
        const values = contacts.map((contact, index) => `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`).join(', ')
        sql += values
        sql += ' RETURNING *;'
      
        const params = contacts.flatMap(contact => [contact.firstName, contact.lastName, contact.email, contact.phone])
      
        return db.query(sql, params)
          .then(res => res.rows)
      }
      
    static update(id, { firstName, lastName, email, phone }) {

        const sql = 'update contacts set firstName = $1, lastName = $2, email = $3, phone = $4 WHERE id = $5 returning *;'
        return db.query(sql, [firstName, lastName, email, phone, id])
            .then(res => res.rows[0]);
    }

    static delete(id) {

        const sql = 'delete from contacts where id = $1 returning *;'
        return db.query(sql, [id])
    }
}

module.exports = Contact


