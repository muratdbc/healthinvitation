class InvitationEmailer < ApplicationMailer

  def new_client_email(form)
    @form=form[:home]
    email="Schedule@FletcherMD.com"
    mail(to: email, subject: 'New Client Questionnaire')
  end
  def new_connect_email(form)
    @form=form[:home]
    email="Schedule@FletcherMD.com"
    mail(to: email, subject: 'New Connect Questionnaire')
  end
  def new_vip_email(form)
    @form=form[:home]
    email="Schedule@FletcherMD.com"
    mail(to: email, subject: 'New Vip Questionnaire')
  end
end
