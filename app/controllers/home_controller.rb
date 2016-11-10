class HomeController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  def index
  end
  def client
  end
  def contact
  end
  def vip
  end
  def calendar
  end
  def newClient
    InvitationEmailer.new_client_email(params).deliver_now
    render json:{status:200}
  end
  def newConnect
    InvitationEmailer.new_connect_email(params).deliver_now
    render json:{status:200}
  end
  def newVip
    InvitationEmailer.new_vip_email(params).deliver_now
    render json:{status:200}
  end
end
