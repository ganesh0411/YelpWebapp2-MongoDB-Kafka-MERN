
#!/bin/sh
bin/kafka-topics.sh --list --zookeeper localhost:2181

for i in loginUser loginOwner SignUpUser SignUpOwner OwnerProfile UserProfile GetUserProfile GetOwnerProfile UserDashboard GetMenu updateMenu Orders getOwnerOrders getUserOrders updateStatus addMessage getMessage 
do
  echo "Creating topic $i"
  bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic $i
done

echo "Topic List : "
bin/kafka-topics.sh --list --zookeeper localhost:2181
