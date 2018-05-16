package com.dao;

import java.util.List;


import com.utils.annotation.MyBatisRepository;

/**
 * @author CHIN
 *
 */
@MyBatisRepository
public interface CapitalFlowMapper {

	public List<Integer> findUsedScoreByUserId(Integer userId);

}
