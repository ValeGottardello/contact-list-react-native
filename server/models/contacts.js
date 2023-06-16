const db = require("../db")

class Contact {
    static findAll() {
        return db.query('select * from contacts where active = true;')
            .then(res => {
                if (!res.rows) {
                    throw new Error(`No records found`)
                }
                return res.rows
            })
    }
    
    static create(contacts) {

        let sql = 'insert into contacts (firstName, lastName, email, phone) VALUES '
        const values = contacts.map((contact, index) => `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`).join(', ')
        sql += values
        sql += ' RETURNING *;'
      
        const params = contacts.flatMap(contact => [contact.firstName, contact.lastName, contact.email, contact.phone])
      
        return db.query(sql, params)
          .then(res => res.rows[0])
      }
      
    static update(id, { firstName, lastName, email, phone }) {

        const sql = 'update contacts set firstName = $1, lastName = $2, email = $3, phone = $4 WHERE id = $5 returning *;'
        return db.query(sql, [firstName, lastName, email, phone, id])
            .then(res => {
                if (res.rows.length === 0) {
                    throw new Error(`Contact with id ${id} not found`)
                }
                return res.rows[0]
            })
    }

    static delete(id) {

        const sql = 'update contacts set active = false WHERE id = $1 returning *;'
        return db.query(sql, [id])
                .then(res => {
                    if (res.rows.length === 0) {
                        throw new Error(`Contact with id ${id} not found`)
                    }
                    return res.rows[0]
                })
    }
}

module.exports = Contact


