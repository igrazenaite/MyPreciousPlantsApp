package myPreciousPlants.users;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<UserForClient> receiveAllUsers() {
		List<User> usersFromDatabase = getUserRepository().findAll();
		List<UserForClient> usersForClient = usersFromDatabase.stream().map((user) -> {
			UserForClient use = new UserForClient();
			use.setUserId(user.getId());
			use.setUserName(user.getUserName());

			return use;
		}).collect(Collectors.toList());
		return usersForClient;
	}

	public void addNewUser(AddNewUser newUser) {
		User use = new User();
		use.setUserName(newUser.getUserName());
		use.setPassword(newUser.getPassword());
		userRepository.save(use);

	}

	public UserRepository getUserRepository() {
		return userRepository;
	}

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

}
