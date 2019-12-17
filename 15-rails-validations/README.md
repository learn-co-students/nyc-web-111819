### Rails VS Sinatra Differences

### Move and Abstract Forms(Maybe Last)
  - Form Partial
  - Breaking our super strict restfull pattern




# Key Questions (When?, Why?, Where?, How?)
- What is validation?
- In MVC, is validation the responsibility of the model, the controller, or the view?
- When does validation happen? How does Rails facilitate validations?
- When should I use a custom validator?
- What validations does ActiveRecord have built-in? How can I find out more?

































https://guides.rubyonrails.org/active_record_validations.html


### Strait from above Rails guide
- Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain.
- Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.
- Creating and saving a new record will send an SQL INSERT operation to the database. Updating an existing record will send an SQL UPDATE operation instead. Validations are typically run before these commands are sent to the database
- save and update return false, and create just returns the object.
- any errors found can be accessed through the errors.messages 
- methods: .errors / .errors.full_messages / .valid?