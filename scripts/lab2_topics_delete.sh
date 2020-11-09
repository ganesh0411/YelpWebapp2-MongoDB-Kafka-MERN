
#!/bin/sh
bin/kafka-topics.sh --list --zookeeper localhost:2181

for i in loginUser loginOwner SignUpUser SignUpOwner OwnerProfile UserProfile GetUserProfile GetOwnerProfile UserDashboard GetMenu updateMenu Orders getOwnerOrders getUserOrders updateStatus addMessage getMessage 
do
  echo "Deleting topic $i"
  bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic $i
done

echo "Topic List : "
bin/kafka-topics.sh --list --zookeeper localhost:2181
