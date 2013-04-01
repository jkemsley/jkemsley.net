class apache {
	
	class { selinux: mode => disabled }

	exec { 'yum-update':
		command => '/usr/bin/yum -y update'
	}

	package { "httpd":
		ensure => present
	}

	package { "httpd-devel":
		ensure => present
	}

	service { "httpd":
		name 	=> 'httpd',
	    enable 	=> true,
		ensure 	=> running,
		require => Package['httpd']
	}

	service { "iptables":
		enable => false,
		ensure => stopped,
		hasstatus => true
	}

	file { '/etc/httpd/conf.d/vhost.conf':
		owner 	=> 'root',
		group 	=> 'root',
		mode  	=> 644,
		replace => true,
		ensure	=> present,
		source 	=> '/vagrant/puppet/files/vhost.conf',
		require => Package['httpd'],
		notify	=> Service['httpd']
	}
}

include apache