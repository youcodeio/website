FROM pierrezemb/gostatic:latest
MAINTAINER Pierre Zemb <contact@pierrezemb.fr>

# Add website
ADD . /srv/http
