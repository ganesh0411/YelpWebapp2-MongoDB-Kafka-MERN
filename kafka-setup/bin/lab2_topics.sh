bin/kafka-topics.sh --list --zookeeper localhost:2181

bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic post_book

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic post_book