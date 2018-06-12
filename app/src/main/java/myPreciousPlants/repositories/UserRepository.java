package myPreciousPlants.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import myPreciousPlants.users.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
