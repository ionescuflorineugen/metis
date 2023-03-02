---
sidebar_position: 2
---

# To Sort
### Description
All the data you want to send it but you have tu sort it after that move it **to:[target-folder]**

---
## [content#1]
Multiple SSH Keys settings for different github account
=================================================================


create different public key
---------------------------------

create different ssh key according the article [Mac Set-Up Git](http://help.github.com/mac-set-up-git/)

	$ ssh-keygen -t rsa -C "your_email@youremail.com"

Please refer to [github ssh issues](http://help.github.com/ssh-issues/) for common problems.

for example, 2 keys created at:

	~/.ssh/id_rsa_activehacker
	~/.ssh/id_rsa_jexchan

then, add these two keys as following

	$ ssh-add ~/.ssh/id_rsa_activehacker
	$ ssh-add ~/.ssh/id_rsa_jexchan

you can delete all cached keys before

	$ ssh-add -D

finally, you can check your saved keys

	$ ssh-add -l


Modify the ssh config
---------------------------------

	$ cd ~/.ssh/
	$ touch config
	$ subl -a config

Then added

	#activehacker account
	Host github.com-activehacker
		HostName github.com
		User git
		IdentityFile ~/.ssh/id_rsa_activehacker

	#jexchan account
	Host github.com-jexchan
		HostName github.com
		User git
		IdentityFile ~/.ssh/id_rsa_jexchan


Clone you repo and modify your Git config
---------------------------------------------

clone your repo
	git clone git@github.com:activehacker/gfs.git gfs_jexchan

cd gfs_jexchan and modify git config

	$ git config user.name "jexchan"
	$ git config user.email "jexchan@gmail.com" 
 
	$ git config user.name "activehacker"
	$ git config user.email "jexlab@gmail.com" 

or you can have global git config
	$ git config --global user.name "jexchan"
	$ git config --global user.email "jexchan@gmail.com"


then use normal flow to push your code

	$ git add .
	$ git commit -m "your comments"
	$ git push


Another related article in Chinese

1. http://4simple.github.com/docs/multipleSSHkeys/
2. https://smarterco.de/set-the-username-and-email-in-git-globally-and-per-project/


# Git 
- multiple keys: /clients/multiple_ssh_setting.md

**For SSH**
```
// Generate an SSH key pair
$ cd ~/.ssh
$ ls
$ ssh-keygen -o -t rsa -C "your@email.com"

Generating public/private rsa key pair.
Enter file in which to save the key (/Users/username/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:

// Add your public key to GitHub
$ cat ~/.ssh/id_rsa.pub
// The output should look something like this:
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA879BJGYlPTLIuc9/R5MYiN4yc/YiCLcdBpSdzgK9Dt0Bkfe3rSz5cPm4wmehdE7GkVFXrBJ2YHqPLuM1yx1AUxIebpwlIl9f/aUHOts9eVnVh4NztPy0iSU/Sv0b2ODQQvcy2vYcujlorscl8JjAgfWsO3W4iGEe6QwBpVomcME8IU35v5VbylM9ORQa6wvZMVrPECBvwItTY8cPWH3MGZiK/74eHbSLKA4PY3gM4GHI450Nie16yggEg2aTQfWA1rry9JYWEoHS9pJ1dnLqZU3k/8OWgqJrilwSoC5rGjgp93iu0H8T6+mEHGRQe84Nk1y5lESSWIbn6P636Bl3uQ== your@email.com
// Copy the contents of the output to your clipboard.

// config
Host bitbucket.org
    IdentityFile ~/.ssh/id_rsa
    IdentitiesOnly yes
```

## TEMP
