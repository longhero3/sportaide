module ApplicationHelper
  def error_class error
    error ? 'error' : ''
  end
end
