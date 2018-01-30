package io.javabrains.springbootstarter.topic;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;



@Service
public class TopicService {

		private List<Topic> topics=new ArrayList<Topic>(Arrays.asList(
				new Topic("Spring", "Spring Framework", "Spring Framework Description"),
				new Topic("Java", "Java Framework", "Java Framework Description"),
				new Topic("JavaScript", "JavaScript Framework", "JavaScript Framework Description")
				));
		
		public List<Topic> getAllTopics(){
			return topics;
		}
		
		public Topic getTopic(String id) {
			return topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
		}
		
		public void addTopic(Topic topic) {
			topics.add(topic);
		}
}

