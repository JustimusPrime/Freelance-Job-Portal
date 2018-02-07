class ApplicationMailer < ActionMailer::Base
  default from: 'MailerBot@devcamp.com'
  layout 'mailer'
end
