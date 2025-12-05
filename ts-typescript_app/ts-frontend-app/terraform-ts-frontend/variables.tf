variable "server_host" {
  type        = string
  description = "server IP"
  default = "213.210.36.103"
}

variable "server_user" {
  type        = string
  description = "SSH user for the server"
  default     = "root"
}

variable "server_password" {
  type        = string
  description = "SSH password"
  sensitive   = true
  default = "aLONaniCKylE@23"
}

variable "app_dir" {
  type        = string
  description = "Directory on the remote server where the app will live"
  default     = "/var/opt/ts-frontend-app"
}

variable "repo_url" {
  type        = string
  description = "Git repo URL of your Django+Docker project"
  default     = "https://github.com/Madesh-techieguy/Terrafrom.git"
}
