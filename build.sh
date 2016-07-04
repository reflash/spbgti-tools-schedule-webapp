#!/usr/bin/env bash
if [ $PRODUCTION = "YES" ]

	then npm run-script grunt-prod

	else npm run-script grunt-stag

fi